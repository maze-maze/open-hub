import type { PropsWithChildren } from 'react'
import { cx } from '~/utils/cx'

const styles = {
  sizes: {
    sm: 'space-x-1',
    md: 'space-x-2',
    lg: 'space-x-4',
  },
  alignments: {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
  },
}

export interface HStackProps {
  size?: keyof typeof styles.sizes
  alignment?: keyof typeof styles.alignments
  className?: string
}

export default function HStack({ children, size = 'md', alignment = 'start', className }: PropsWithChildren<HStackProps>) {
  return (
    <div className={cx('flex flex-row items-center', styles.sizes[size], styles.alignments[alignment], className)}>
      {children}
    </div>
  )
}
