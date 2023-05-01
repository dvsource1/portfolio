'use client'

import { useAuth, useClerk } from '@clerk/nextjs'

const useActions = () => {
  const clerk = useClerk()
  const { signOut } = useAuth()

  return { signIn: clerk.openSignIn, signOut }
}

export default useActions
