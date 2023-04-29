'use client'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RouteOptions } from 'dv/@types/route'

export interface SidePanelState {
  isOpen: boolean
  options?: RouteOptions | null
}

const initialState: SidePanelState = { isOpen: false }

export const sidePanelSlice = createSlice({
  name: 'sidePanel',
  initialState,
  reducers: {
    openPanel: state => {
      state.isOpen = true
    },
    closePanel: state => {
      state.isOpen = false
    },
    changeSidePanelOptions: (state, action: PayloadAction<RouteOptions>) => {
      state.options = action.payload
    },
    clearSidePanelOptions: state => {
      state.options = null
    },
  },
})

export const {
  openPanel,
  closePanel,
  changeSidePanelOptions,
  clearSidePanelOptions,
} = sidePanelSlice.actions

export default sidePanelSlice.reducer
