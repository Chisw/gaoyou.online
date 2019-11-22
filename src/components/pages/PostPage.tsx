import React, { useState, useEffect } from 'react'
import Body from '../layout/Body'
import { IPost } from '../../ts/types'
import API from '../../api'
import { emptyPost } from '../../ts/util'
import { ButtonGroup, Button, Icon } from '@blueprintjs/core'

interface PostPageProps {
  match: any
}

export default function PostPage(props: PostPageProps) {

  const postId: string = props.match.params.id

  const [post, setPost] = useState<IPost>(emptyPost)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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
      <div className="htc-post-page flex">

        <div className="page-main w-640px">
          <div className="bg-gray-800 rounded overflow-hidden shadow-lg">
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
                src="http://jisuowei.com/i/img/avatar.jpg"
              />
              <span className="ml-2 text-sm text-gray-400">Chisw</span>
              <span className="ml-1 text-xs text-gray-600 text-right flex-grow">上传于 2019-11-12 15:36</span>
            </div>
          </div>
        </div>

        <div className="page-side w-360px pl-4">
          <div className="side-map">
            <h4 className="text-gray-700"><Icon icon="map-marker" /> 地图上的位置</h4>
            <div className="mt-2 w-full min-h-200px bg-gray-500 rounded"></div>
          </div>
        </div>

      </div>
    </Body>
  )
} 