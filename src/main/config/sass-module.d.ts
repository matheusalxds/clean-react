/**
 * it's necessary to typescript understand scss like classes
 */
declare module '*.scss' {
  const content: { [className: string]: string }
  export = content
}
