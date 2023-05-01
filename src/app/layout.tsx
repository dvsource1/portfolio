import SideBar from './components/sidebar/SideBar'
import SidePanel from './components/sidepanel/SidePanel'
import './globals.css'
import ReduxProvider from './redux/provider'
import { ClerkProvider } from '@clerk/nextjs/app-beta'
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
      <ClerkProvider>
        <body suppressHydrationWarning={true}>
          <ReduxProvider>
            <div className={`${firaCode.className} flex`}>
              <SideBar />
              {/* SidePanel */}
              <SidePanel />
              {/* Main Content */}
              <main className="h-screen flex-1 bg-[#282c34] text-[#abb2bf]">
                {children}
              </main>
            </div>
          </ReduxProvider>
        </body>
      </ClerkProvider>
    </html>
  )
}
