import React from 'react'
import Body from '../layout/Body'

interface PostPageProps {
  match: any
}

export default function PostPage(props: PostPageProps) {

  return (
    <Body>
      PostId: {props.match.params.id}
    </Body>
  )
}