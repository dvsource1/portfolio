'use client'

import SideBar from './components/SideBar'
import SidePanel from './components/SidePanel'
import HomePage from './pages/HomePage'
import { Fira_Code } from 'next/font/google'
import { useState } from 'react'

const firaCode = Fira_Code({ subsets: ['latin'] })

export default function Home() {
  const [title, setTitle] = useState('DVSOURCE')
  const [actions, setActions] = useState([])
  const [options, setOptions] = useState(null)

  const onRouteChange = (route: any) => {
    setTitle(route.name)
    setOptions(route.options)
    setActions([])
  }

  const onAction = (action: any) => {
    setActions(action.sideActions)
  }

  const onSideAction = (_: any) => {
    setActions([])
  }

  const showSidePanel = !!actions?.length || options

  return (
    <div className={`${firaCode.className} flex`}>
      {/* Sidebar */}
      <SideBar onRouteChange={onRouteChange} onAction={onAction} />

      {/* SidePanel */}
      {showSidePanel && (
        <SidePanel
          onSideAction={onSideAction}
          actions={actions}
          options={options}
        />
      )}

      {/* Main Content */}
      <main className="h-screen flex-1 bg-[#282c34] p-2 text-[#abb2bf]">
        <HomePage title={title} />
      </main>
    </div>
  )
}
