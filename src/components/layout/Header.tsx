import React from 'react'
import Center from './Center'
import logo from '../../images/logo.png'


export default function Header() {
  return (
    <div className="h-12 bg-gray-800 shadow-lg">
      <Center className="h-full">
        <div className="w-24 h-full flex items-center">
          <img src={logo} alt="logo" className="w-24" />
        </div>
      </Center>
    </div>
  )
}