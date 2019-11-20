import React from 'react'
import { IPost } from '../ts/types'
import PostCard from './PostCard'

interface PostListProps {
  posts: IPost[]
}

export default function PostList(props: PostListProps) {

  const {
    posts,
  } = props

  return (
    <div className="htc-post-list -mx-2">
      {
        posts.map((post, index) => {
          return <PostCard key={index} post={post} />
        })
      }
    </div>
  )
}