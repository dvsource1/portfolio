'use client'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RouteAction } from 'dv/@types/route'
import { ROOT_ACTIONS } from 'dv/app/actions/getRootActions'

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
    init: (state, action: PayloadAction<RouteAction[]>) => {
      state.rootActions = action.payload
    },
    doAction: (state, action: PayloadAction<RouteAction>) => {
      state.activeAction = action.payload
    },
  },
})

export const { init, doAction } = routesSlice.actions

export default routesSlice.reducer
