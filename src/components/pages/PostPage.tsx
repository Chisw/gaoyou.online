import React, { useState, useEffect } from 'react'
import Body from '../layout/Body'
import { IPost } from '../../ts/types'
import API from '../../api'
import { emptyPost } from '../../ts/util'
import { ButtonGroup, Button, Icon, TextArea } from '@blueprintjs/core'
import Center from '../layout/Center'
import { animateScroll as scroll } from 'react-scroll';

interface PostPageProps {
  match: any
}

export default function PostPage(props: PostPageProps) {

  const postId: string = props.match.params.id

  const [post, setPost] = useState<IPost>(emptyPost)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    scroll.scrollToTop()
    const _post: IPost = API.post.get(postId)[0]
    setTimeout(() => {
      if (_post) {
        setPost(_post)
        setLoading(false)
      }
    }, 200)
  }, [postId])

  return (
    <Body isLoading={loading}>
      <Center>
        <div className="py-6 flex">

          <div className="w-640px">
            <div className="rounded overflow-hidden shadow-lg">
              <div className="p-4 flex items-center">
                <div className="flex-grow">
                  <p className="text-base text-gray-200">{post.title}</p>
                  <p className="mt-1 text-sm text-gray-500">{post.description}</p>
                </div>
                <div>
                  <ButtonGroup>
                    <Button intent="primary" icon="chevron-left"></Button>
                    <Button intent="primary" rightIcon="chevron-right">下一张</Button>
                  </ButtonGroup>
                </div>
              </div>
              <div className="">
                <img alt="post" className="w-full" src={post ? post.url : ''} />
              </div>
              <div className="p-4 flex items-center flex-grow">
                <img
                  alt="avatar"
                  className="w-6 h-6 rounded-full"
                  src="https://jisuowei.com/file/avatar.jpg"
                />
                <span className="ml-2 text-sm text-gray-400">Chisw</span>
                <span className="ml-1 text-xs text-gray-600 text-right flex-grow">上传于 2019-11-12 15:36</span>
              </div>
            </div>

            <div className="mt-5 p-4 rounded overflow-hidden shadow-lg">
              <TextArea
                fill
                growVertically
                rows={3}
                className="resize-none"
                placeholder="留下你精彩的评论吧 ^_^"

              />
              <div className="flex mt-3">
                <div className="flex-grow"></div>
                <div>
                  <Button
                    intent="primary"
                    className="w-20"
                  >
                    发布
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="mb-4 text-gray-600 text-sm"><Icon icon="comment" /> 3 条评论</div>
              {
                [1,2,3].map(item => {
                  return (
                    <div className="mb-4" key={item}>
                      <div className="flex items-center mb-2 text-xs">
                        <img
                          alt="avatar"
                          className="w-4 h-4 rounded-full"
                          src="http://jisuowei.com/i/img/avatar.jpg"
                        />
                        <span className="ml-1 flex-grow text-gray-400">
                          Chisw
                        </span> 
                        <span className="text-gray-700">
                          2019-11-23 23:09
                        </span>
                      </div>
                      <div className="p-3 flex-grow rounded-lg" style={{ borderTopLeftRadius: 0 }}>
                        <div className="text-xs text-gray-300">
                          哇，好久好久好久好久好久好久好久好久好久好久好久好久好久好久好久好久好久好久好久好久好久好久好久好久好久好久好久好久好久以前的照片哦
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>

          </div>

          <div className="page-side w-360px pl-5">
            <div className="side-map shadow-lg">
              <h4 className="text-gray-700"><Icon icon="map-marker" /> 地图上的位置</h4>
              <div className="mt-2 w-full min-h-200px bg-gray-500 rounded"></div>
            </div>
          </div>

        </div>
      </Center>
    </Body>
  )
} 