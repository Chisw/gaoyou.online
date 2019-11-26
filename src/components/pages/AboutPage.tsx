import React from 'react'
import Body from '../layout/Body'
import Center from '../layout/Center'

export default function AboutPage() {
  return (
    <Body>
      <Center>
        <div className="py-6 text-center">

          <h3 className="text-gray-500 text-lg">联系</h3>
          <p className="mt-2 mb-8 text-gray-300 text-sm">Email: i@jisuowei.com</p>

          <h3 className="text-gray-500 text-lg">链接</h3>
          <p className="mt-2 mb-8 text-gray-300 text-sm">高邮志 <a href="https://zhi.gaoyou.online" target="_blank" rel="noopener noreferrer">https://zhi.gaoyou.online</a></p>

        </div>
      </Center>
    </Body>
  )
}