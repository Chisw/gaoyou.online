import React, { useEffect, useState } from 'react'
import Body from '../layout/Body'
import PostList from '../PostList'
import { IPost } from '../../ts/types'
import API from '../../api'

export default function HomePage() {

  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    const _posts: IPost[] = API.post.get()
    setTimeout(() => {
      setPosts(_posts)
    }, 200)
  }, [])
  
  return (
    <Body isLoading={posts.length === 0}>
      <PostList posts={posts} />
    </Body>
  )
}