import SideBar from './components/SideBar'
import SidePanel from './components/SidePanel'
import './globals.css'
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
  // const [title, setTitle] = useState('DVSOURCE')
  // const [actions, setActions] = useState([])
  // const [options, setOptions] = useState(null)

  const onRouteChange = (route: any) => {
    // setTitle(route.name)
    // setOptions(route.options)
    // setActions([])
  }

  const onAction = (action: any) => {
    // setActions(action.sideActions)
  }

  const onSideAction = (_: any) => {
    // setActions([])
  }

  // const showSidePanel = !!actions?.length || options

  return (
    <html lang="en">
      <body>
        <div className={`${firaCode.className} flex`}>
          <SideBar />

          {/* SidePanel */}
          {true && <SidePanel />}

          {/* Main Content */}
          <main className="h-screen flex-1 bg-[#282c34] p-2 text-[#abb2bf]">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
