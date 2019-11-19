import React from 'react'
import Body from '../layout/Body'
import PostList from '../PostList'
import { IPost } from '../../ts/types'

export default function HomePage() {

  const posts: IPost[] = [
    { title: '文游台', description: '者是以端描述', url: 'http://192.168.31.84/1.png', user: 'chisw', date: new Date(), type: 'people', location: [131, 32] },
    { title: '文游中路', description: '者是是以端是以端描描是以端描以端描述', url: 'http://192.168.31.84/2.png', user: 'chisw', date: new Date(), type: 'people', location: [131, 32] },
    { title: '大街', description: '者是以端描述', url: 'http://192.168.31.84/3.png', user: 'chisw', date: new Date(), type: 'people', location: [131, 32] },
    { title: '文游台', description: '者是是以端描以端描述', url: 'http://192.168.31.84/1.jpg', user: 'chisw', date: new Date(), type: 'people', location: [131, 32] },
    { title: '文游中路', description: '者是以端描述', url: 'http://192.168.31.84/2.jpg', user: 'chisw', date: new Date(), type: 'people', location: [131, 32] },
    { title: '大街', description: '者是以是以端描端是以端描是以端描描述', url: 'http://192.168.31.84/3.jpg', user: 'chisw', date: new Date(), type: 'people', location: [131, 32] },
    { title: '文游台', description: '者是以端描述', url: 'http://192.168.31.84/4.jpg', user: 'chisw', date: new Date(), type: 'people', location: [131, 32] },
    { title: '文游中路', description: '者是是以端描是以端描以端描述', url: 'http://192.168.31.84/5.jpg', user: 'chisw', date: new Date(), type: 'people', location: [131, 32] },
    { title: '大街', description: '者是以端描述', url: 'http://192.168.31.84/6.jpg', user: 'chisw', date: new Date(), type: 'people', location: [131, 32] },
  ]


  return (
    <Body isLoading={false}>
      <PostList posts={posts} />
    </Body>
  )
}