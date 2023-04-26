'use client'

import SideBar from './components/SideBar'
import ContextMenuContainer from './components/menu/ContextMenuContainer'
import useContextMenu from './hooks/useContextMenu'
import HomePage from './pages/HomePage'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'] })

export default function Home() {
  const { clicked, setClicked, points, setPoints } = useContextMenu()

  return (
    <div className={`${firaCode.className} flex`}>
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main
        className="h-screen flex-1 bg-[#282c34] p-2 text-[#abb2bf]"
        onContextMenu={e => {
          console.log('right click')
          e.preventDefault()
          setClicked(true)
          setPoints({ x: e.pageX, y: e.pageY })
        }}>
        <HomePage />
        <ContextMenuContainer clicked={clicked} x={points.x} y={points.y} />
      </main>
    </div>
  )
}
