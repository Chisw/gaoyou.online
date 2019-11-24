import React from 'react'
import { NavLink } from 'react-router-dom'
import { categories } from '../ts/util'

export default function Categories() {
  return (
    <div className="htc-categories mx-auto text-sm">
      {
        categories.map(item => (
          <div className="mb-2 text-center" key={item.id}>
            <NavLink to="/" className="mx-1 px-1">
              <span className="text-gray-200 text-shadow hover:text-gray-500">
                {item.name}
              </span>
            </NavLink>
            <span className="text-gray-200">/</span>
            {
              item.children.map((child, index) => (
                <span key={index}>
                  {index !== 0 && <span className="text-gray-200">·</span>}
                  <NavLink to="/" className="mx-1 px-1">
                    <span className="text-gray-200 text-shadow hover:text-gray-500">
                      {child.name}
                    </span>
                  </NavLink>
                </span>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}