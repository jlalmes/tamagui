import { Tag } from '@tamagui/lucide-icons'
import NextLink from 'next/link'
import { Button } from 'tamagui'

export const AlphaButton = () => {
  return (
    <NextLink legacyBehavior href="/blog/version-one-release-candidate" passHref>
      <Button
        accessibilityLabel="Tamagui v1 Release Candidate blog post"
        rotate="-2deg"
        theme="pink_alt2"
        cursor="pointer"
        opacity={0.9}
        hoverStyle={{ opacity: 1 }}
        tag="a"
        size="$2"
        $sm={{ dsp: 'none' }}
      >
        RC.0
      </Button>
    </NextLink>
  )
}

// if (process.env.STUDIO_ON === '1') {
//   const router = useRouter()
//   const isTakeout = router.pathname.startsWith('/takeout')
//   const isTakeoutPurchase = router.pathname.startsWith('/takeout/purchase')
//   const { tint } = useTint()

//   return (
//     <>
//       <NextLink legacyBehavior href={isTakeoutPurchase ? '/takeout' : isTakeout ? '/' : '/takeout'} passHref>
//         <Button
//           rotate="1.25deg"
//           // @ts-ignore
//           theme={`${tint}_alt2`}
//           fontWeight="600"
//           cursor="pointer"
//           mx="$1"
//           tag="a"
//           size="$2"
//           icon={
//             isTakeout ? null : (
//               <Text fontSize={20} y={1}>
//                 🥡
//               </Text>
//             )
//           }
//         >
//           <SizableText size="$2" $sm={{ width: 0, height: 0, overflow: 'hidden', mx: -2.5 }}>
//             {isTakeout ? (
//               <SizableText fow="500" size="$2">
//                 &laquo; Back
//               </SizableText>
//             ) : (
//               'Takeout'
//             )}
//           </SizableText>
//         </Button>
//       </NextLink>
//     </>
//   )
// }
