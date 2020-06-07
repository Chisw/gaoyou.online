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
    <div className={`relative pt-12 w-full min-h-200 ${className}`}>
      <div>
        {children}
      </div>
      { isLoading && <CoverSpinner /> }
    </div>
  )
}