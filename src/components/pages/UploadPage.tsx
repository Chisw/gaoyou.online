import React from 'react'
import Body from '../layout/Body'
import Center from '../layout/Center'
import { FileInput } from '@blueprintjs/core'

export default function UploadPage() {
  return (
    <Body>
      <Center>
        <div className="py-6 w-640px">
          <div className="p-4 bg-gray-800 rounded">
            <div className="mb-4 h-160 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-gray-500"></div>
            <FileInput
              fill
            />
          </div>
        </div>
      </Center>
    </Body>
  )
} 