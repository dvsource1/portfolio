import SideBar from './components/sidebar/SideBar'
import SidePanel from './components/sidepanel/SidePanel'
import './globals.css'
import Provider from './redux/provider'
import { Fira_Code } from 'next/font/google'

export const metadata = {
  title: 'Portfolio',
  description: 'github.com/dvsource1 portfolio',
}

const firaCode = Fira_Code({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider>
          <div className={`${firaCode.className} flex`}>
            <SideBar />

            {/* SidePanel */}
            <SidePanel />

            {/* Main Content */}
            <main className="h-screen flex-1 bg-[#282c34] p-2 text-[#abb2bf]">
              {children}
            </main>
          </div>
        </Provider>
      </body>
    </html>
  )
}
