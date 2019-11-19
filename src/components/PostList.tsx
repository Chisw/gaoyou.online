import React from 'react'
import { IPost } from '../ts/types'
import Post from './Post'

interface PostListProps {
  posts: IPost[]
}

export default function PostList(props: PostListProps) {

  const {
    posts,
  } = props

  return (
    <div className="htc-post-list flex flex-wrap -mx-8">
      {
        posts.map((post, index) => {
          return <Post key={index} post={post} />
        })
      }
    </div>
  )
}