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
    <div
      className={`${className} px-6 md:px-12 lg:px-20 xl:px-24 relative mx-auto`}
      style={{ maxWidth: 1920 }}
    >
      {children}
    </div>
  )
}