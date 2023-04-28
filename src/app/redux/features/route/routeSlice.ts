'use client'

import { createSlice } from '@reduxjs/toolkit'
import { Route } from 'dv/@types/route'

export type RouteState = Route

const initialState: RouteState = {
  slug: '/',
  name: 'DVSOURCE',
}

export const routeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    clear: state => {
      state.slug = initialState.slug
      state.name = initialState.name
    },
  },
})

export const { clear } = routeSlice.actions

export default routeSlice.reducer
