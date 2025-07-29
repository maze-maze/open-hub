import type { PropsWithChildren } from 'react'
import { cx } from '~/utils/cx'

const styles = {
  sizes: {
    sm: 'space-y-1',
    md: 'space-y-2',
    lg: 'space-y-4',
  },
  alignments: {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    between: 'items-between',
  },
}

export interface VStackProps {
  size?: keyof typeof styles.sizes
  alignment?: keyof typeof styles.alignments
  className?: string
}

export default function VStack({ children, size = 'md', alignment = 'start', className }: PropsWithChildren<VStackProps>) {
  return (
    <div className={cx('flex flex-col justify-center', styles.sizes[size], styles.alignments[alignment], className)}>
      {children}
    </div>
  )
}
