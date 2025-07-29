'use client'

import { Moon01, Sun } from '@untitledui/icons'
import { useTheme } from 'next-themes'
import { Button } from '~/components/base/buttons/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      aria-label="Toggle theme"
      color="tertiary"
      size="sm"
      iconLeading={theme === 'light' ? Moon01 : Sun}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    />
  )
}
