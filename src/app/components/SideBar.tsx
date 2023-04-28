'use client'

import Logo from './Logo'
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
import Link from 'next/link'
import { useState } from 'react'

const SideBar = (props: any) => {
  const ROUTES = [
    {
      slug: '/',
      icon: HomeIcon,
      name: 'DVSOURCE',
    },
    {
      slug: '/projects',
      icon: RectangleStackIcon,
      name: 'Projects',
      options: { hasSearch: true },
    },
    {
      slug: '/blog',
      icon: BookOpenIcon,
      name: 'Blog',
      options: { hasSearch: true },
    },
    {
      slug: '/store',
      icon: ShoppingBagIcon,
      name: 'Store',
      options: { hasSearch: true },
    },
    {
      slug: '/about',
      icon: QuestionMarkCircleIcon,
      name: 'About',
    },
    {
      slug: '/contact',
      icon: PhoneIcon,
      name: 'Contact',
    },
  ]
  const ACTIONS = [
    {
      icon: Cog8ToothIcon,
      name: 'Settings',
      sideActions: [{ name: 'Action 1' }, { name: 'Action 2' }],
    },
    {
      icon: UserIcon,
      name: 'Profile',
      sideActions: [
        { name: 'Action 1' },
        { name: 'Action 2' },
        { name: 'Action 3' },
        { name: 'Action 4' },
      ],
    },
  ]

  const [activeRoute, setActiveRoute] = useState(ROUTES[0])

  const onRouteChange = (route: any) => {
    setActiveRoute(route)
  }

  const onAction = (action: any) => {}

  return (
    <div className="flex h-screen w-12 flex-col bg-[#282c34]/90">
      <Logo />

      {/* Routes */}
      <div className="flex-1">
        <ul>
          {ROUTES.map((route, i) => (
            <Link
              className=""
              key={i}
              onClick={() => onRouteChange(route)}
              href={route.slug}>
              <SideBarIcon
                icon={route.icon}
                tootip={route.name}
                active={activeRoute.slug === route.slug}
              />
            </Link>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="bg-[#e5c07b]/20">
        <ul>
          {ACTIONS.map((action, i) => (
            <li className="" key={i} onClick={() => onAction(action)}>
              <SideBarIcon icon={action.icon} tootip={action.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar
