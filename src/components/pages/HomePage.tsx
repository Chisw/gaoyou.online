import React, { useEffect, useState } from 'react'
import PostList from '../PostList'
import { IPost } from '../../ts/types'
import API from '../../api'
import Center from '../layout/Center'
import CountUp from 'react-countup'
import Categories from '../Categories'
import { Input } from 'antd'

export default function HomePage() {

  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    const _posts: IPost[] = API.post.get()
    setTimeout(() => {
      setPosts(_posts)
    }, 200)
  }, [])
  
  return (
    <>
      <div
        className="pt-16 pb-32"
        style={{
          backgroundImage: `linear-gradient(${-45}deg, ${'rgb(27, 213, 255)'}, ${'rgb(20 ,53, 178)'})`
        }}
      >
        <Center>
          <div className="py-10 font-thin text-center text-lg text-gray-100 text-shadow">
            已揽藏 <CountUp className="font-din text-4xl" start={0} end={2156} duration={2} useEasing={false} /> 张照片
          </div>
          <div className="mb-12 flex justify-center">
            <div className="w-1/2">
              <Input.Search
                size="large"
                className="w-1/2 bg-white-900"
                placeholder="搜索"
              />
            </div>
          </div>
          <Categories />
        </Center>
      </div>
      <Center className="relative z-10 pt-12 pb-4">
        <PostList posts={posts} />
      </Center>
    </>
  )
}