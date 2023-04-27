'use client'

import SideBar from './components/SideBar'
import HomePage from './pages/HomePage'
import { Fira_Code } from 'next/font/google'
import { useState } from 'react'

const firaCode = Fira_Code({ subsets: ['latin'] })

export default function Home() {
  const [title, setTitle] = useState('DVSOURCE')

  const onRouteChange = (route: any) => {
    setTitle(route.name)
  }

  return (
    <div className={`${firaCode.className} flex`}>
      {/* Sidebar */}
      <SideBar onRouteChange={onRouteChange} />

      {/* Main Content */}
      <main className="h-screen flex-1 bg-[#282c34] p-2 text-[#abb2bf]">
        <HomePage title={title} />
      </main>
    </div>
  )
}
