import React, { useState } from 'react'
import Center from './Center'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom'
import { Popover, Button, IconName, Icon } from '@blueprintjs/core'

export default function Header() {

  const menus: {
    icon: IconName
    text: string
    url: string
  }[] = [
      { icon: 'user', text: '我的主页', url: '/user' },
      { icon: 'upload', text: '上传照片', url: '/upload' },
      { icon: 'info-sign', text: '关于', url: '/about' },
    ]

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
            position="bottom-right"
            className="mt-6"
            onClose={() => { setMenuOpen(false) }}
          >
            <Button minimal icon="menu" className="relative -mt-6" onClick={() => { setMenuOpen(true) }} />
            <div className="p-2 w-40 bg-gray-800 rounded">
              {
                menus.map(menu => (
                  <NavLink to={menu.url} key={menu.url}>
                    <div
                      className="flex items-center my-1 p-2 text-gray-400 rounded hover:bg-gray-700"
                      onClick={() => { setMenuOpen(false) }}
                    >
                      <div className="mr-2">
                        <Icon icon={menu.icon} />
                      </div>
                      <div>
                        <span>{menu.text}</span>
                      </div>
                    </div>
                  </NavLink>
                ))
              }
            </div>
          </Popover>
        </div>
      </Center>
    </div>
  )
}