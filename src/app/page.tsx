import SideBar from './components/SideBar'
import HomePage from './pages/HomePage'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${firaCode.className} flex`}>
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="h-screen flex-1 bg-[#282c34] p-2 text-[#abb2bf]">
        <HomePage />
      </main>
    </div>
  )
}
