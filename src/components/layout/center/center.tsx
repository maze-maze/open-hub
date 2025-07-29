import type { PropsWithChildren } from 'react'
import { cx } from '~/utils/cx'

export default function Center({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cx('flex items-center justify-center', className)}>
      {children}
    </div>
  )
}
