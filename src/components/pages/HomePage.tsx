import React, { useEffect, useState } from 'react'
import Body from '../layout/Body'
import PostList from '../PostList'
import { IPost } from '../../ts/types'
import API from '../../api'
import Center from '../layout/Center'
import CountUp from 'react-countup'
import Categories from '../Categories'

export default function HomePage() {

  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    const _posts: IPost[] = API.post.get()
    setTimeout(() => {
      setPosts(_posts)
    }, 200)
  }, [])
  
  return (
    <Body
      isLoading={posts.length === 0}
    >
      <div
        className="absolute top-0 pt-12 w-full h-200 bg-gray-600 bg-cover bg-center"
        style={{ backgroundImage: `url(http://q1gbvecrx.bkt.clouddn.com/gaoyou-1968.png)` }}
      >
        <div
          className="absolute z-0 w-full h-full bottom-0"
          style={{ backgroundImage: 'linear-gradient(0deg, #1a202c, transparent)' }}
        />
        <div className="absolute z-10 w-full h-full">
          <Center>
            <div className="py-10 font-thin text-center text-lg text-gray-100 text-shadow">
              已揽藏 <CountUp className="font-dinc text-4xl" start={0} end={2156} duration={2} useEasing={false} /> 张照片
            </div>
            <Categories />
          </Center>
        </div>
      </div>
      <Center className="relative z-10 mt-64 pt-12 pb-4">
        <PostList posts={posts} />
      </Center>
    </Body>
  )
}