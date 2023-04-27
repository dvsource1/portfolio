'use client'

import SideBarIcon from './SideBarIcon'
import {
  BookOpenIcon,
  Cog8ToothIcon,
  HomeIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  RectangleStackIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { useState } from 'react'

const SideBar = (props: any) => {
  const ROUTES = [
    { slug: '/', icon: HomeIcon, name: 'DVSOURCE' },
    { slug: '/projects', icon: RectangleStackIcon, name: 'Projects' },
    { slug: '/blog', icon: BookOpenIcon, name: 'Blog' },
    { slug: '/store', icon: ShoppingBagIcon, name: 'Store' },
    { slug: '/about', icon: QuestionMarkCircleIcon, name: 'About' },
    { slug: '/contact', icon: PhoneIcon, name: 'Contact' },
  ]

  const [activeRoute, setActiveRoute] = useState(ROUTES[0])

  const ACTIONS = [
    { icon: Cog8ToothIcon, name: 'Settings' },
    { icon: UserIcon, name: 'Profile' },
  ]

  return (
    <div className="flex h-screen w-12 flex-col bg-[#282c34]/95">
      {/* Logo */}
      <div className="flex h-12 w-full items-center justify-center bg-[#61AFEF] text-2xl font-extrabold text-white">
        DV
      </div>

      {/* Routes */}
      <div className="flex-1">
        <ul>
          {ROUTES.map((route, i) => (
            <li
              className=""
              key={i}
              onClick={() => {
                setActiveRoute(route)
                props?.onRouteChange(route)
              }}>
              <SideBarIcon
                icon={route.icon}
                tootip={route.name}
                active={activeRoute.slug === route.slug}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="bg-[#e5c07b]/20">
        <ul>
          {ACTIONS.map((action, i) => (
            <li className="" key={i}>
              <SideBarIcon icon={action.icon} tootip={action.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar
