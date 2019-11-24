import React from 'react'
import Center from './Center'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom'


export default function Header() {
  return (
    <div
      className="htc-header fixed z-30 top-0 w-full h-12 bg-gray-800 shadow-lg-200"
      style={{ background: 'rgba(45, 55, 72, .92)' }}
    >
      <Center className="h-full flex ">
        <div className="w-24 h-full flex items-center hover-bright">
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-24" />
          </NavLink>
        </div>
        <div className="flex items-center justify-end flex-grow">
          <span>开发中..</span>
        </div>
      </Center>
    </div>
  )
}