'use client'

import type { FC, ReactNode } from 'react'
import type { ButtonProps as AriaButtonProps } from 'react-aria-components'
import React, { isValidElement } from 'react'
import { Button as AriaButton } from 'react-aria-components'
import { cx, sortCx } from '~/utils/cx'
import { isReactComponent } from '~/utils/is-react-component'

export const styles = sortCx({
  common: {
    root: [
      'group relative inline-flex h-max cursor-pointer items-center justify-center whitespace-nowrap outline-brand transition duration-100 ease-linear before:absolute focus-visible:outline-2 focus-visible:outline-offset-2',
      // Disabled styles
      'disabled:cursor-not-allowed disabled:text-fg-disabled',
      // Icon styles
      'disabled:*:data-icon:text-fg-disabled_subtle',
      '*:data-icon:pointer-events-none *:data-icon:size-5 *:data-icon:shrink-0 *:data-icon:transition-inherit-all',
    ].join(' '),
    icon: 'pointer-events-none size-5 shrink-0 transition-inherit-all',
  },
  sizes: {
    xs: {
      root: 'gap-1 rounded-md px-2.5 py-1.5 text-xs font-semibold before:rounded-[5px] data-icon-only:p-1.5',
    },
    sm: {
      root: 'gap-1 rounded-lg px-3 py-2 text-sm font-semibold before:rounded-[7px] data-icon-only:p-2',
    },
    md: {
      root: 'gap-1 rounded-lg px-3.5 py-2.5 text-sm font-semibold before:rounded-[7px] data-icon-only:p-2.5',
    },
    lg: {
      root: 'gap-1.5 rounded-lg px-4 py-2.5 text-md font-semibold before:rounded-[7px] data-icon-only:p-3',
    },
    xl: {
      root: 'gap-1.5 rounded-lg px-4.5 py-3 text-md font-semibold before:rounded-[7px] data-icon-only:p-3.5',
    },
  },
  colors: {
    'primary': {
      root: [
        'bg-brand-solid text-white shadow-xs-skeumorphic ring-1 ring-transparent ring-inset hover:bg-brand-solid_hover data-loading:bg-brand-solid_hover',
        // Inner border gradient
        'before:absolute before:inset-px before:border before:border-white/12 before:mask-b-from-0%',
        // Disabled styles
        'disabled:bg-disabled disabled:shadow-xs disabled:ring-disabled_subtle',
        // Icon styles
        '*:data-icon:text-button-primary-icon hover:*:data-icon:text-button-primary-icon_hover',
      ].join(' '),
    },
    'secondary': {
      root: [
        'bg-primary text-secondary shadow-xs-skeumorphic ring-1 ring-primary ring-inset hover:bg-primary_hover hover:text-secondary_hover data-loading:bg-primary_hover',
        // Disabled styles
        'disabled:shadow-xs disabled:ring-disabled_subtle',
        // Icon styles
        '*:data-icon:text-fg-quaternary hover:*:data-icon:text-fg-quaternary_hover',
      ].join(' '),
    },
    'tertiary': {
      root: [
        'text-tertiary hover:bg-primary_hover hover:text-tertiary_hover data-loading:bg-primary_hover',
        // Icon styles
        '*:data-icon:text-fg-quaternary hover:*:data-icon:text-fg-quaternary_hover',
      ].join(' '),
    },
    'outline': {
      root: [
        'bg-primary text-secondary shadow-xs ring-1 ring-border ring-inset hover:bg-primary_hover hover:text-secondary_hover data-loading:bg-primary_hover',
        // Disabled styles
        'disabled:shadow-xs disabled:ring-disabled_subtle',
        // Icon styles
        '*:data-icon:text-fg-quaternary hover:*:data-icon:text-fg-quaternary_hover',
      ].join(' '),
    },
    'danger': {
      root: [
        'bg-error-solid text-white shadow-xs-skeumorphic ring-1 ring-transparent outline-error ring-inset hover:bg-error-solid_hover data-loading:bg-error-solid_hover',
        // Inner border gradient
        'before:absolute before:inset-px before:border before:border-white/12 before:mask-b-from-0%',
        // Disabled styles
        'disabled:bg-disabled disabled:shadow-xs disabled:ring-disabled_subtle',
        // Icon styles
        '*:data-icon:text-button-destructive-primary-icon hover:*:data-icon:text-button-destructive-primary-icon_hover',
      ].join(' '),
    },
    'danger-secondary': {
      root: [
        'bg-primary text-error-primary shadow-xs-skeumorphic ring-1 ring-error_subtle outline-error ring-inset hover:bg-error-primary hover:text-error-primary_hover data-loading:bg-error-primary',
        // Disabled styles
        'disabled:bg-primary disabled:shadow-xs disabled:ring-disabled_subtle',
        // Icon styles
        '*:data-icon:text-fg-error-secondary hover:*:data-icon:text-fg-error-primary',
      ].join(' '),
    },
  },
})

/**
 * Props for the new button component
 */
export interface ButtonProps extends Omit<AriaButtonProps, 'className'> {
  /** The size variant of the button */
  size?: keyof typeof styles.sizes
  /** The color variant of the button */
  color?: keyof typeof styles.colors
  /** Icon component or element to show before the text */
  iconLeading?: FC<{ className?: string }> | ReactNode
  /** Icon component or element to show after the text */
  iconTrailing?: FC<{ className?: string }> | ReactNode
  /** Shows a loading spinner and disables the button */
  isLoading?: boolean
  /** When true, keeps the text visible during loading state */
  showTextWhileLoading?: boolean
  /** Additional CSS class name */
  className?: string
}

export function Button({
  size = 'sm',
  color = 'primary',
  children,
  className,
  iconLeading: IconLeading,
  iconTrailing: IconTrailing,
  isDisabled: disabled,
  isLoading: loading,
  showTextWhileLoading,
  ...otherProps
}: ButtonProps) {
  const isIcon = (IconLeading || IconTrailing) && !children

  return (
    <AriaButton
      data-loading={loading ? true : undefined}
      data-icon-only={isIcon ? true : undefined}
      isPending={loading}
      isDisabled={disabled || loading}
      {...otherProps}
      className={cx(
        styles.common.root,
        styles.sizes[size].root,
        styles.colors[color].root,
        // If in `loading` state, hide everything except the loading icon (and text if `showTextWhileLoading` is true).
        loading && (showTextWhileLoading ? '[&>*:not([data-icon=loading]):not([data-text])]:hidden' : '[&>*:not([data-icon=loading])]:invisible'),
        className,
      )}
    >
      {values => (
        <>
          {/* Leading icon */}
          {isValidElement(IconLeading) && IconLeading}
          {isReactComponent(IconLeading) && <IconLeading data-icon="leading" className={styles.common.icon} />}

          {loading && (
            <svg
              fill="none"
              data-icon="loading"
              viewBox="0 0 20 20"
              className={cx(styles.common.icon, !showTextWhileLoading && 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2')}
            >
              {/* Background circle */}
              <circle className="stroke-current opacity-30" cx="10" cy="10" r="8" fill="none" strokeWidth="2" />
              {/* Spinning circle */}
              <circle
                className="origin-center animate-spin stroke-current"
                cx="10"
                cy="10"
                r="8"
                fill="none"
                strokeWidth="2"
                strokeDasharray="12.5 50"
                strokeLinecap="round"
              />
            </svg>
          )}

          {children && (
            <span data-text className="transition-inherit-all px-0.5">
              {typeof children === 'function' ? children(values) : children}
            </span>
          )}

          {/* Trailing icon */}
          {isValidElement(IconTrailing) && IconTrailing}
          {isReactComponent(IconTrailing) && <IconTrailing data-icon="trailing" className={styles.common.icon} />}
        </>
      )}
    </AriaButton>
  )
}

export { styles as buttonStyles }
