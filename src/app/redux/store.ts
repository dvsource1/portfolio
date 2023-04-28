'use client'

import routeReducer from './features/route/routeSlice'
import sidePanelReducer from './features/sidePanel/sidePanelSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    sidePanel: sidePanelReducer,
    route: routeReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
