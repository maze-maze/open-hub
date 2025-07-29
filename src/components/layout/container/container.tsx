import type { PropsWithChildren } from 'react'
import { cx } from '~/utils/cx'

const styles = {
  sizes: {
    sm: 'px-4 py-2',
    md: 'px-6 py-4',
    lg: 'px-8 py-6',
  },
}

export interface ContainerProps {
  size?: keyof typeof styles.sizes
  className?: string
}

export default function Container({ children, size = 'md', className }: PropsWithChildren<ContainerProps>) {
  return (
    <div className={cx('w-full h-full', styles.sizes[size], className)}>
      {children}
    </div>
  )
}
