import { useForceUpdate, useIsomorphicLayoutEffect, useUnmountEffect } from '@tamagui/core'
import React, {
  Children,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
  useContext,
  useRef,
  useState,
} from 'react'

import { LayoutGroupContext } from './LayoutGroupContext'
import { PresenceChild } from './PresenceChild'

React['keep']

export interface AnimatePresenceProps {
  /**
   * By passing `initial={false}`, `AnimatePresence` will disable any initial animations on children
   * that are present when the component is first rendered.
   */
  initial?: boolean

  /**
   * When a component is removed, there's no longer a chance to update its props. So if a component's `exit`
   * prop is defined as a dynamic variant and you want to pass a new `custom` prop, you can do so via `AnimatePresence`.
   * This will ensure all leaving components animate using the latest data.
   */
  exitVariant?: string | null

  enterVariant?: string | null

  /**
   * Fires when all exiting nodes have completed animating out.
   */
  onExitComplete?: () => void

  /**
   * If set to `true`, `AnimatePresence` will only render one component at a time. The exiting component
   * will finish its exit animation before the entering component is rendered.
   */
  exitBeforeEnter?: boolean

  /**
   * Used in Framer to flag that sibling children *shouldn't* re-render as a result of a
   * child being removed.
   */
  presenceAffectsLayout?: boolean
}

type ComponentKey = string | number

const getChildKey = (child: ReactElement<any>): ComponentKey => child.key || ''

const isDev = process.env.NODE_ENV !== 'production'

function updateChildLookup(
  children: ReactElement<any>[],
  allChildren: Map<ComponentKey, ReactElement<any>>
) {
  const seenChildren = isDev ? new Set<ComponentKey>() : null

  children.forEach((child) => {
    const key = getChildKey(child)

    if (isDev && seenChildren && seenChildren.has(key)) {
      console.warn(`Children of AnimatePresence require unique keys. "${key}" is a duplicate.`)

      seenChildren.add(key)
    }

    allChildren.set(key, child)
  })
}

function onlyElements(children: ReactNode): ReactElement<any>[] {
  const filtered: ReactElement<any>[] = []

  // We use forEach here instead of map as map mutates the component key by preprending `.$`
  Children.forEach(children, (child, index) => {
    if (isValidElement(child)) {
      if (!child.key) {
        if (process.env.NODE_ENV === 'development') {
          console.warn(`No key given to AnimatePresence child, assigning index as key`)
        }
        filtered.push(
          React.cloneElement(child, {
            key: index,
          })
        )
      } else {
        filtered.push(child)
      }
    }
  })

  return filtered
}

/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```tsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `useEntering` all need to call `safeToRemove`.
 *
 * @public
 */
export const AnimatePresence: React.FunctionComponent<
  React.PropsWithChildren<AnimatePresenceProps>
> = ({
  children,
  enterVariant,
  exitVariant,
  initial = true,
  onExitComplete,
  exitBeforeEnter,
  presenceAffectsLayout = true,
}) => {
  // We want to force a re-render once all exiting animations have finished. We
  // either use a local forceRender function, or one from a parent context if it exists.
  let forceRender = useForceUpdate()
  const forceRenderLayoutGroup = useContext(LayoutGroupContext).forceRender
  if (forceRenderLayoutGroup) forceRender = forceRenderLayoutGroup

  const [isMounted, setIsMounted] = useState(false)

  useIsomorphicLayoutEffect(() => {
    setIsMounted(true)
  }, [])

  // Filter out any children that aren't ReactElements. We can only track ReactElements with a props.key
  const filteredChildren = onlyElements(children)
  let childrenToRender = filteredChildren

  const exiting = new Set<ComponentKey>()

  // Keep a living record of the children we're actually rendering so we
  // can diff to figure out which are entering and exiting
  const presentChildren = useRef(childrenToRender)

  // A lookup table to quickly reference components by key
  const allChildren = useRef(new Map<ComponentKey, ReactElement<any>>()).current

  // If this is the initial component render, just deal with logic surrounding whether
  // we play onMount animations or not.
  const isInitialRender = useRef(true)

  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false
    updateChildLookup(filteredChildren, allChildren)
    presentChildren.current = childrenToRender
  })

  useUnmountEffect(() => {
    isInitialRender.current = true
    allChildren.clear()
    exiting.clear()
  })

  if (isInitialRender.current) {
    return (
      <>
        {childrenToRender.map((child) => (
          <PresenceChild
            key={getChildKey(child)}
            isEntering
            exitVariant={exitVariant}
            enterVariant={enterVariant}
            initial={initial ? undefined : false}
            presenceAffectsLayout={presenceAffectsLayout}
          >
            {child}
          </PresenceChild>
        ))}
      </>
    )
  }

  // If this is a subsequent render, deal with entering and exiting children
  childrenToRender = [...childrenToRender]

  // Diff the keys of the currently-present and target children to update our
  // exiting list.
  const presentKeys = presentChildren.current.map(getChildKey)
  const targetKeys = filteredChildren.map(getChildKey)

  // Diff the present children with our target children and mark those that are exiting
  const numPresent = presentKeys.length
  for (let i = 0; i < numPresent; i++) {
    const key = presentKeys[i]

    if (targetKeys.indexOf(key) === -1) {
      exiting.add(key)
    }
  }

  // If we currently have exiting children, and we're deferring rendering incoming children
  // until after all current children have exiting, empty the childrenToRender array
  if (exitBeforeEnter && exiting.size) {
    childrenToRender = []
  }

  // Loop through all currently exiting components and clone them to overwrite `animate`
  // with any `exit` prop they might have defined.
  exiting.forEach((key) => {
    // If this component is actually entering again, early return
    if (targetKeys.indexOf(key) !== -1) return

    const child = allChildren.get(key)
    if (!child) return

    const insertionIndex = presentKeys.indexOf(key)

    childrenToRender.splice(
      insertionIndex,
      0,
      <PresenceChild
        key={getChildKey(child)}
        isEntering={false}
        onExitComplete={() => {
          allChildren.delete(key)
          exiting.delete(key)

          // Remove this child from the present children
          const removeIndex = presentChildren.current.findIndex(
            (presentChild) => presentChild.key === key
          )
          presentChildren.current.splice(removeIndex, 1)

          // Defer re-rendering until all exiting children have indeed left
          if (!exiting.size) {
            presentChildren.current = filteredChildren

            if (isMounted === false) return

            forceRender()
            onExitComplete?.()
          }
        }}
        exitVariant={exitVariant}
        enterVariant={enterVariant}
        presenceAffectsLayout={presenceAffectsLayout}
      >
        {child}
      </PresenceChild>
    )
  })

  // Add `MotionContext` even to children that don't need it to ensure we're rendering
  // the same tree between renders
  childrenToRender = childrenToRender.map((child) => {
    const key = child.key as string | number
    return exiting.has(key) ? (
      child
    ) : (
      <PresenceChild
        key={getChildKey(child)}
        isEntering={undefined}
        exitVariant={exitVariant}
        enterVariant={enterVariant}
        presenceAffectsLayout={presenceAffectsLayout}
      >
        {child}
      </PresenceChild>
    )
  })

  if (process.env.NODE_ENV !== 'production' && exitBeforeEnter && childrenToRender.length > 1) {
    console.warn(
      `You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour.`
    )
  }

  return (
    <>{exiting.size ? childrenToRender : childrenToRender.map((child) => cloneElement(child))}</>
  )
}

AnimatePresence.displayName = 'AnimatePresence'