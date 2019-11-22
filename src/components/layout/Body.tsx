import React from 'react'
import Center from './Center'
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
    <div className={`htc-body relative py-4 w-full min-h-300px bg-gray-900 ${className}`}>
      <Center>
        {children}
      </Center>
      { isLoading && <CoverSpinner /> }
    </div>
  )
}