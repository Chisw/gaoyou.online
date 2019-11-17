import React from 'react'

interface CenterProps {
  children: React.ReactNode
  className?: string
}

export default function Center(props: CenterProps) {

  const {
    children,
    className = '',
  } = props
  
  return (
    <div className={`w-center mx-auto ${className}`}>
      {children}
    </div>
  )
}