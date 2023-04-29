'use client'

import actionsReducer from './features/actions/actionsSlice'
import routesReducer from './features/routes/routesSlice'
import sidePanelReducer from './features/sidePanel/sidePanelSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    sidePanel: sidePanelReducer,
    routes: routesReducer,
    actions: actionsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
