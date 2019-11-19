import React from 'react'
import { IPost } from '../ts/types'

interface PostProps {
  post: IPost
}

export default function Post(props: PostProps) {

  const {
    post: {
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
    <div
      className="htc-post mx-1 mb-4 w-200px rounded overflow-hidden bg-gray-700"
    >
      <div>
        <img src={url} alt={title} />
      </div>
      <div className="post-text p-2">
        <p className="truncate text-sm text-gray-300">{title}</p>
        <p className="truncate text-xs text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  )
}