import React from 'react'
import clsx from 'clsx'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  fullWidth?: boolean
}

const stylesByVariant: Record<Variant, string> = {
  primary: 'bg-primary-600 hover:bg-primary-700 text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100',
  ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-primary-600'
}

const stylesBySize: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-md',
  md: 'px-4 py-2 text-sm rounded-lg',
  lg: 'px-5 py-3 text-base rounded-lg'
}

export function Button({ variant = 'primary', size = 'md', fullWidth, className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed',
        stylesByVariant[variant],
        stylesBySize[size],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    />
  )
}
