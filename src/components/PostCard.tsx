import React from 'react'
import { IPost } from '../ts/types'
import { Icon } from '@blueprintjs/core'

interface PostCardProps {
  post: IPost
}

export default function PostCard(props: PostCardProps) {

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
      className="htc-post-card mx-2 mb-4 rounded overflow-hidden bg-gray-800 shadow cursor-pointer hover:shadow-xl select-none tst-200"
    >
      <div className="card-thumbnail">
        <img src={url} alt={title} />
      </div>
      <div className="card-text p-2">
        <p className="truncate text-sm text-gray-100">{title}</p>
        <p className="word-break text-xs text-gray-600 mt-1">{description}</p>
      </div>
      {/* <div className="card-user p-2 flex items-center flex-grow">
        <img
          className="w-4 h-4 rounded-full"
          src="http://jisuowei.com/i/img/avatar.jpg"
        />
        <span className="ml-1 text-xs text-gray-400">Chisw</span>
        <span className="ml-1 text-xs text-gray-400 text-right flex-grow">2019-11-12</span>
      </div> */}
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
        {user + date + updateDate + uploadDate + location}
      </div>

    </div>
  )
}