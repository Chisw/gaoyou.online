import React from 'react'
import Body from '../layout/Body'
import PostList from '../PostList'
import { IPost } from '../../ts/types'

export default function HomePage() {

  const posts: IPost[] = [
    { title: '中市口旧貌', description: '摄于1992年', url: 'http://5b0988e595225.cdn.sohucs.com/images/20181001/34e80953f06d4d1f80f6de535b215a9c.jpeg', user: 'chisw', date: new Date(), type: 'people', location: [131, 32] },
    { title: '蝶园广场旧貌', description: '拍摄于1994年', url: 'http://5b0988e595225.cdn.sohucs.com/images/20181001/685115a1130d48fda67745ff1b19f4a5.jpeg', user: 'chisw', date: new Date(), type: 'people', location: [131, 32] },
    { title: '大淖河休闲广场旧貌', description: '摄于1982年', url: 'http://5b0988e595225.cdn.sohucs.com/images/20181001/040ad663c051434b9733fedc929ff667.jpeg', user: 'chisw', date: new Date(), type: 'people', location: [131, 32] },
    { title: '古文游台旧貌', description: '拍摄于1995年', url: 'http://5b0988e595225.cdn.sohucs.com/images/20181001/830ba70bc7b54f43b5e0b2ad8dbd2f26.jpeg', user: 'chisw', date: new Date(), type: 'people', location: [131, 32] },
    { title: '县府西街新貌', description: '摄于2001年', url: 'http://5b0988e595225.cdn.sohucs.com/images/20181001/80fec2af9a7b453e838faedae24eaf45.jpeg', user: 'chisw', date: new Date(), type: 'people', location: [131, 32] },
    { title: '县府西街旧貌', description: '摄于1995年', url: 'http://5b0988e595225.cdn.sohucs.com/images/20181001/fac4753bd6ab4200890d6495bc140210.jpeg', user: 'chisw', date: new Date(), type: 'people', location: [131, 32] },
    { title: '文游中路旧貌', description: '摄于80年代初', url: 'http://5b0988e595225.cdn.sohucs.com/images/20181001/7fc0f2e96b934bb5b465c9700ac73ac9.jpeg', user: 'chisw', date: new Date(), type: 'people', location: [131, 32] },
    { title: '商业步行街旧貌', description: '拍摄于2001年', url: 'http://5b0988e595225.cdn.sohucs.com/images/20181001/26a6497f0d294be6a2a6636a253aeb52.jpeg', user: 'chisw', date: new Date(), type: 'people', location: [131, 32] },
    { title: '北海电影院旧貌', description: '拍摄于1998年', url: 'http://5b0988e595225.cdn.sohucs.com/images/20181001/ccbd5a1ffcd74853a6533ef3328e8cbd.jpeg', user: 'chisw', date: new Date(), type: 'people', location: [131, 32] },
    { title: '护城河旧貌', description: '摄于1981年', url: 'http://5b0988e595225.cdn.sohucs.com/images/20181001/dfc255d074094aa688f698c1222288af.jpeg', user: 'chisw', date: new Date(), type: 'people', location: [131, 32] },
    { title: '大剧院旧貌', description: '摄于1993年', url: 'http://5b0988e595225.cdn.sohucs.com/images/20181001/077ddcb372d540f5a30f206d92c53d72.jpeg', user: 'chisw', date: new Date(), type: 'people', location: [131, 32] },
    { title: '蝶园路旧貌', description: '摄于1992年', url: 'http://5b0988e595225.cdn.sohucs.com/images/20181001/d499fb00397d44538918226f119022c0.jpeg', user: 'chisw', date: new Date(), type: 'people', location: [131, 32] },
  ]
  
  return (
    <Body isLoading={false}>
      <PostList posts={posts} />
    </Body>
  )
}