/* We cannot use type `unknown` instead of `any` here because it will break the type assertion `isReactComponent` function is providing. */
import type React from 'react'

type ReactComponent = React.FC<any> | React.ComponentClass<any, any>

/**
 * Checks if a given value is a function component.
 */
export function isFunctionComponent(component: any): component is React.FC<any> {
  return typeof component === 'function'
}

/**
 * Checks if a given value is a class component.
 */
export function isClassComponent(component: any): component is React.ComponentClass<any, any> {
  return typeof component === 'function' && component.prototype && (!!component.prototype.isReactComponent || !!component.prototype.render)
}

/**
 * Checks if a given value is a forward ref component.
 */
export function isForwardRefComponent(component: any): component is React.ForwardRefExoticComponent<any> {
  return typeof component === 'object' && component !== null && component.$$typeof.toString() === 'Symbol(react.forward_ref)'
}

/**
 * Checks if a given value is a valid React component.
 */
export function isReactComponent(component: any): component is ReactComponent {
  return isFunctionComponent(component) || isForwardRefComponent(component) || isClassComponent(component)
}
