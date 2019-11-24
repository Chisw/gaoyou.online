import React from 'react'
import CoverSpinner from '../overlay/CoverSpinner'

interface BodyProps {
  children: React.ReactNode
  className?: string
  isLoading?: boolean
}

export default function Body(props: BodyProps) {

  const {
    children,
    className = '',
    isLoading = false,
  } = props

  return (
    <div className={`htc-body relative pt-12 w-full min-h-200 bg-gray-900 ${className}`}>
      <div>
        {children}
      </div>
      { isLoading && <CoverSpinner /> }
    </div>
  )
}