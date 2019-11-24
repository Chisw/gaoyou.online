import React, { useState } from 'react'
import Center from './Center'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom'
import { Popover, Button, Menu, MenuItem } from '@blueprintjs/core'

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      className="htc-header fixed z-30 top-0 w-full h-12 bg-gray-800 border-t-4 border-gray-600 shadow-lg-200"
      style={{ background: 'rgba(45, 55, 72, .96)' }}
    >
      <Center className="h-full flex ">
        <div className="w-24 h-full flex items-center hover-bright">
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-24" />
          </NavLink>
        </div>
        <div className="flex items-center justify-end flex-grow">

          <Popover
            minimal
            isOpen={menuOpen}
            // modifiers={{ offset: 4 }}
            position="bottom-right"
            onClose={() => { setMenuOpen(false) }}
          >
            <Button minimal icon="menu" onClick={() => { setMenuOpen(true) }} />
            <Menu large>
              <NavLink to="/me">
                <MenuItem icon="user" text="个人中心" onClick={() => { setMenuOpen(false) }} />
              </NavLink>
              <NavLink to="/upload">
                <MenuItem icon="upload" text="上传照片" onClick={() => { setMenuOpen(false) }} />
              </NavLink>
            </Menu>
          </Popover>
        </div>
      </Center>
    </div>
  )
}