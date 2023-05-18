'use client'

import ActionButton from './ActionButton'
import SidePanelSearch from './SidePanelSearch'
import useNavigationEvent from 'dv/app/hooks/useNavigationEvent'
import { RootState } from 'dv/app/redux/store'
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
      <div className="md hidden h-screen w-72 flex-col bg-[#282c34]/95 md:flex">
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
