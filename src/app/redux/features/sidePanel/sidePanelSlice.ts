'use client'

import { createSlice } from '@reduxjs/toolkit'

export interface SidePanelState {
  isOpen: boolean
  options?: {
    hasSearch: boolean
  }
  actions?: any[]
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
  },
})

export const { openPanel, closePanel } = sidePanelSlice.actions

export default sidePanelSlice.reducer
