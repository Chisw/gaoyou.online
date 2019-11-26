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
    <div className={`htc-center relative z-10 w-1000px mx-auto ${className}`}>
      {children}
    </div>
  )
}