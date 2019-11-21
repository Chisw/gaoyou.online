import React from 'react'
import Center from './Center'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom'


export default function Header() {
  return (
    <div className="h-12 bg-gray-800 shadow-lg">
      <Center className="h-full flex">
        <div className="w-20 h-full flex items-center">
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-20" />
          </NavLink>
        </div>
        <div className="flex items-center justify-end flex-grow">
          <span>开发中..</span>
        </div>
      </Center>
    </div>
  )
}