'use client'

import { store } from './store'
import { Provider as ReduxProvider } from 'react-redux'

const Provider = ({ children }: any) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>
}

export default Provider
