import React from 'react'
import { IPost } from '../ts/types'
import PostCard from './PostCard'
import { Masonry } from 'gestalt'
import 'gestalt/dist/gestalt.css'

interface PostListProps {
  posts: IPost[]
}

export default function PostList(props: PostListProps) {

  const {
    posts,
  } = props

  return (
    <div className="htc-post-list">
      <Masonry
        comp={(data: any, index) => <PostCard post={data.data} key={index} />}
        items={posts}
        minCols={1}
      />
    </div>
  )
}