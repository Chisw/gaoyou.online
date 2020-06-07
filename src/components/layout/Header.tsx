import React, { useState } from 'react'
import Center from './Center'
import logo from '../../images/logo.png'
import logoDark from '../../images/logo-dark.png'
import { NavLink } from 'react-router-dom'
import { IconName, Icon } from '@blueprintjs/core'
import { throttle } from 'lodash'
import { Dropdown } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

const throttleScroll = throttle((setShow: (show: boolean) => void) => {
  const top = document.documentElement.scrollTop
  setShow(top > 180)
}, 100)

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

  const [show, setShow] = useState(false)

  window.addEventListener('scroll', () => throttleScroll(setShow))

  return (
    <div
      className={`fixed z-30 top-0 w-full h-16 transition-all duration-200 ${show ? 'bg-white-900 bg-hazy-50 shadow-lg' : ''}`}
    >
      <Center className="h-full flex items-center">
        <div className="w-24 h-full flex items-center hover:opacity-75 transition-all duration-200 cursor-pointer">
          <NavLink to="/">
            <img src={show ? logoDark : logo} alt="logo" className="w-24" />
          </NavLink>
        </div>
        <div className="flex items-center justify-end flex-grow">
          <Dropdown
            overlay={(
              <div className="p-2 w-40 rounded bg-white shadow-lg">
                {menus.map(menu => (
                  <NavLink to={menu.url} key={menu.url}>
                    <div className="flex items-center p-2 text-gray-600 rounded hover:bg-gray-200 hover:text-blue-500">
                      <div className="mr-2">
                        <Icon icon={menu.icon} />
                      </div>
                      <div>
                        <span>{menu.text}</span>
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>
            )}
          >
            <span className="text-white text-lg cursor-pointer">
              <MenuOutlined />
            </span>
          </Dropdown>

        </div>
      </Center>
    </div>
  )
}