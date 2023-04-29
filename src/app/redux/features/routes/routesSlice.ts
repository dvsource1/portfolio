'use client'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Route } from 'dv/@types/route'

const ROOT_ROUTES = [
  {
    slug: '/',
    icon: 'HomeIcon',
    name: 'DVSOURCE',
  },
  {
    slug: '/projects',
    icon: 'RectangleStackIcon',
    name: 'Projects',
    options: {
      hasSearch: true,
      actions: [{ name: 'Add Project', icon: 'PlusIcon' }],
    },
  },
  {
    slug: '/blog',
    icon: 'BookOpenIcon',
    name: 'Blog',
    options: {
      hasSearch: true,
      actions: [{ name: 'Add Post', icon: 'PlusIcon' }],
    },
  },
  {
    slug: '/store',
    icon: 'ShoppingBagIcon',
    name: 'Store',
    options: { hasSearch: true },
  },
  {
    slug: '/about',
    icon: 'QuestionMarkCircleIcon',
    name: 'About',
  },
  {
    slug: '/contact',
    icon: 'PhoneIcon',
    name: 'Contact',
  },
]

export type RoutesState = {
  rootRoutes: Route[]
  activeRoute: Route
}

const initialState: RoutesState = {
  rootRoutes: ROOT_ROUTES,
  activeRoute: ROOT_ROUTES[0],
}

export const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    changeActiveRoute: (slate, action: PayloadAction<Route>) => {
      slate.activeRoute = action.payload
    },
  },
})

export const { changeActiveRoute } = routesSlice.actions

export default routesSlice.reducer
