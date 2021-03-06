import React from 'react'
import { IPost } from '../ts/types'
import { Icon } from '@blueprintjs/core'
import { NavLink } from 'react-router-dom'

interface PostCardProps {
  post: IPost
}

export default function PostCard(props: PostCardProps) {

  const {
    post: {
      id,
      title,
      description = '',
      url,
      user,
      date,
      uploadDate,
      updateDate,
      location,
    }
  } = props

  return (
    <>
      <NavLink
        to={`/post/${id}`}
        className="px-2 w-1/4 relative rounded overflow-hidden cursor-pointer select-none transition-all duration-200"
      >
        <div className="h-40 overflow-hidden">
          <img className=""  src={url} alt={title} />
        </div>
        <div className="card-text p-2">
          <p className="truncate text-xs text-gray-100">{title}</p>
          <p className="word-break text-xs text-gray-600 mt-1">{description}</p>
        </div>
        <div className="card-info px-2 pb-2 flex items-center text-gray-600 text-xs">
          <div className="flex-grow">
            <Icon iconSize={12} icon="thumbs-up" /> 11
          </div>
          <div className="flex-grow text-center">
            <Icon iconSize={12} icon="comment" /> 23
          </div>
          <div className="flex-grow text-right">
            <Icon iconSize={12} icon="eye-open" /> 56
          </div>
        </div>
        <div className="hidden">
          {user + date + updateDate + uploadDate + location + description}
        </div>
      </NavLink>
    </>
  )
}