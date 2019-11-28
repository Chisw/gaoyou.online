import React, { useState } from 'react'
import Body from '../layout/Body'
import Center from '../layout/Center'
import { Tabs, Tab } from '@blueprintjs/core'

export default function UserPage() {

  const [activePanel, setActivePanel] = useState('gallery')

  return (
    <Body>
      <Center>
        <div>
          <div className="flex justify-center pt-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden shadow">
              <img className="w-full h-full" src="http://jisuowei.com/i/img/avatar.jpg" alt="avatar" />
            </div>
          </div>
          <p className="my-2 text-center text-base"><span>Chisw</span></p>
        </div>
        <div className="mt-4 text-center bg-gray-800">
          <Tabs
            large
            className="inline-block"
            selectedTabId={activePanel}
            onChange={id => { setActivePanel(id as string) }}
          >
            <Tab id="gallery" className="mx-2" title="相簿"></Tab>
            <Tab id="collect" className="mx-2" title="收藏"></Tab>
            <Tab id="profile" className="mx-2" title="资料"></Tab>
          </Tabs>
        </div>
        <div className="p-4 bg-gray-800 border-t border-gray-900">
          <div>
            {activePanel}
          </div>
        </div>
      </Center>
    </Body>
  )
}