'use client'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RouteAction } from 'dv/@types/route'

const ROOT_ACTIONS = [
  {
    icon: 'Cog8ToothIcon',
    name: 'Settings',
    children: [{ name: 'Languge', icon: 'LanguageIcon' }],
  },
  {
    icon: 'UserIcon',
    name: 'Profile',
    children: [
      { name: 'Profile', icon: 'UserCircleIcon' },
      { name: 'Logout', icon: 'ArrowLeftOnRectangleIcon' },
    ],
  },
]

export type ActionsState = {
  rootActions: RouteAction[]
  activeAction?: RouteAction
}

const initialState: ActionsState = {
  rootActions: ROOT_ACTIONS,
}

export const routesSlice = createSlice({
  name: 'actions',
  initialState,
  reducers: {
    doAction: (slate, action: PayloadAction<RouteAction>) => {
      slate.activeAction = action.payload
    },
  },
})

export const { doAction } = routesSlice.actions

export default routesSlice.reducer
