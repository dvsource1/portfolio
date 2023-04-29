'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const useNavigationEvent = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(pathname + searchParams.toString())
    // You can now use the current URL
  }, [pathname, searchParams])

  return { url, pathname }
}

export default useNavigationEvent
