import React from 'react'
import clsx from 'clsx'

type CardProps = {
  title?: string
  children: React.ReactNode
  className?: string
  footer?: React.ReactNode
}

export const Card: React.FC<CardProps> = ({ title, children, className, footer }) => {
  return (
    <div className={clsx('rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm', className)}>
      {(title || footer) && (
        <div className="border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex items-center justify-between">
          {title && <h3 className="text-sm font-semibold">{title}</h3>}
          {footer}
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  )
}
