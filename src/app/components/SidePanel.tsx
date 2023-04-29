'use client'

import useNavigationEvent from '../hooks/useNavigationEvent'
import { RootState } from '../redux/store'
import ActionButton from './ActionButton'
import SidePanelSearch from './SidePanelSearch'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const SidePanel = () => {
  const sidePanel = useSelector((state: RootState) => state.sidePanel)
  const { pathname } = useNavigationEvent()

  useEffect(() => {
    console.log(pathname)
  }, [pathname])

  return sidePanel.isOpen ? (
    sidePanel.isOpen && (
      <div className="flex h-screen w-60 flex-col bg-[#282c34]/95 md:w-72">
        <div className="flex-1">
          {sidePanel.options?.hasSearch && <SidePanelSearch />}
        </div>
        {sidePanel.options?.actions?.length && (
          <div className="">
            {sidePanel.options.actions.map((action, i) => {
              return <ActionButton action={action} key={i} />
            })}
          </div>
        )}
      </div>
    )
  ) : (
    <>{/* SidePanel */}</>
  )
}

export default SidePanel
