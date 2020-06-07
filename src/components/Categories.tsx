import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { categories } from '../ts/util'
import { Tag } from 'antd'

export default function Categories() {
  return (
    <div className="mt-4 mx-auto text-sm text-center">
      {categories.map(item => (
        <Fragment key={item.id}>
          {item.children.map((child, index) => (
            <NavLink key={index} to="/" className="m-1 inline-block">
              <Tag className="text-gray-200" color="blue">
                {child.name}
              </Tag>
            </NavLink>
          ))}
        </Fragment>
      ))}
    </div>
  )
}