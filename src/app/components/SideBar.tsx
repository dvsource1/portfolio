'use client'

import {
  closePanel,
  openPanel,
} from '../redux/features/sidePanel/sidePanelSlice'
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
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

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

  const dispatch = useDispatch()
  const [activeRoute, setActiveRoute] = useState(ROUTES[0])
  const router = useRouter()

  const onRouteChange = (route: any) => {
    router.push(route.slug)
    setActiveRoute(route)
    if (route?.options?.hasSearch) {
      dispatch(openPanel())
    } else {
      dispatch(closePanel())
    }
  }

  const onAction = (action: any) => {
    dispatch(openPanel())
  }

  return (
    <div className="flex h-screen w-12 flex-col bg-[#282c34]/90">
      <Logo />

      {/* Routes */}
      <div className="flex-1">
        <ul>
          {ROUTES.map((route, i) => (
            <li className="" key={i} onClick={() => onRouteChange(route)}>
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
