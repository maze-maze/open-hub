import type { PropsWithChildren } from 'react'
import { RouteProvider } from './route-provider'
import { ThemeProvider } from './theme-provider'

export function Providers({ children }: PropsWithChildren) {
  return (
    <RouteProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </RouteProvider>
  )
}
