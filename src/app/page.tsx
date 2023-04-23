import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'] })


import SideBar from './components/SideBar'

export default function Home() {
  return (
    <div className={`${firaCode.className} flex`}>
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="h-screen flex-1 p-2 bg-[#282c34] text-[#abb2bf] mx-auto text-center pt-20">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus numquam accusantium consectetur aliquam fugit tempora ipsa recusandae voluptate illum obcaecati sapiente magnam nemo iste id provident veniam quo, dolores cum.
      </main>
    </div>
  )
}
