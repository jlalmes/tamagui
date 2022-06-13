globalThis['React'] = require('React')

// debug
import '@tamagui/core/reset.css'
import '@tamagui/polyfill-dev'

import { Studio } from '@takeout/studio'
import { SelectDemo } from '@tamagui/demos'
import { useState } from 'react'
import { useColorScheme } from 'react-native'

import Tamagui from './tamagui.config'

export const Sandbox = () => {
  const scheme = useColorScheme()
  const [theme, setTheme] = useState(scheme as any)
  return (
    <Tamagui.Provider defaultTheme={theme}>
      <button
        style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
        }}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Switch theme
      </button>

      <div
        style={{
          width: '100vw',
          height: '100vh',
          pointerEvents: 'auto',
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--backgroundStrong)',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* <Studio /> */}
        <SelectDemo />
      </div>
    </Tamagui.Provider>
  )
}