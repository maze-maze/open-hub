import type { PropsWithChildren } from 'react'
import Container from './container'

export interface PageContainerProps {
  className?: string
}

export default function PageContainer({ children }: PropsWithChildren<PageContainerProps>) {
  return (
    <div className="sm:container mx-auto pt-16 pb-8">
      <Container size="sm">
        {children}
      </Container>
    </div>
  )
}
