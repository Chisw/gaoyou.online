import React from 'react'
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {

  const {
    children,
  } = props
  
  return (
    <div className="bp3-dark bg-gray-900">
      <Header />
      {children}
    </div>
  )
}