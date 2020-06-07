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
    <>
      <div className="-mx-2 flex flex-wrap">
        {posts.map((post, index) => {
          return <PostCard post={post} key={index} />
        })}
      </div>
    </>
  )
}