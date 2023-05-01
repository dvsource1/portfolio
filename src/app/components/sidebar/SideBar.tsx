'use client'

import useNavigationEvent from '../../hooks/useNavigationEvent'
import { changeActiveRoute } from '../../redux/features/routes/routesSlice'
import {
  changeSidePanelOptions,
  clearSidePanelOptions,
  closePanel,
  openPanel,
} from '../../redux/features/sidePanel/sidePanelSlice'
import { RootState } from '../../redux/store'
import Logo from './Logo'
import SideBarIcon from './SideBarIcon'
import { Route, RouteAction, RouteOptions } from 'dv/@types/route'
import { getRootActions } from 'dv/app/actions/getRootActions'
import useActions from 'dv/app/hooks/useActions'
import { init } from 'dv/app/redux/features/actions/actionsSlice'
import { find } from 'lodash'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SideBar = (props: any) => {
  const navigater = useRouter()
  const dispatch = useDispatch()

  const { rootRoutes, homeRoute, activeRoute } = useSelector(
    (state: RootState) => state.routes,
  )
  const rootActions = useSelector(
    (state: RootState) => state.actions.rootActions,
  )

  const { pathname } = useNavigationEvent()

  const { signIn, signOut } = useActions()

  useEffect(() => {
    const currentRoute = find(rootRoutes, { slug: pathname })
    changeRoute(currentRoute ? currentRoute : homeRoute)
  }, [pathname])

  const changeSidePanel = (routeOptions?: RouteOptions) => {
    if (routeOptions) {
      dispatch(changeSidePanelOptions(routeOptions))
      dispatch(openPanel())
    } else {
      dispatch(closePanel())
      dispatch(clearSidePanelOptions())
    }
  }

  const changeRoute = (route: Route) => {
    dispatch(changeActiveRoute(route))
    changeSidePanel(route.options)
  }

  const onAction = (action: RouteAction) => {
    dispatch(openPanel())
    if (action.children) {
      dispatch(changeSidePanelOptions({ actions: action.children }))
    } else {
      dispatch(clearSidePanelOptions())
    }
  }

  const onRouteLinkClick = (route: Route) => {
    if (route === activeRoute) {
      changeSidePanel(route.options)
    }
  }

  dispatch(init(getRootActions({ signin: signIn, signout: signOut })))

  return (
    <div className="flex h-screen w-12 flex-col bg-[#282c34]/90">
      <Logo />

      {/* Routes */}
      <div className="flex-1">
        <ul>
          {rootRoutes.map((route, i) => (
            <li className="" key={i}>
              <Link href={route.slug} onClick={() => onRouteLinkClick(route)}>
                <SideBarIcon
                  icon={route.icon}
                  tootip={route.name}
                  type={'route'}
                  active={activeRoute.slug === route.slug}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="bg-[#e5c07b]/20">
        <ul>
          {rootActions.map((action, i) => (
            <li className="" key={i} onClick={() => onAction(action)}>
              <SideBarIcon
                icon={action.icon}
                type={'action'}
                tootip={action.name}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar
