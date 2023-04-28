'use client'

import { RootState } from '../redux/store'
import ActionButton from './ActionButton'
import SidePanelSearch from './SidePanelSearch'
import { useSelector } from 'react-redux'

const SidePanel = (props: any) => {
  const sidePanel = useSelector((state: RootState) => state.sidePanel)

  return sidePanel.isOpen ? (
    sidePanel.isOpen && (
      <div className="flex h-screen w-60 flex-col bg-[#282c34]/95 md:w-72">
        <div className="flex-1">
          {sidePanel.options?.hasSearch && <SidePanelSearch />}
        </div>
        {sidePanel.actions?.length && (
          <div className="">
            {sidePanel.actions.map((action: any) => {
              return <ActionButton action={action} />
            })}
          </div>
        )}
      </div>
    )
  ) : (
    <></>
  )
}

export default SidePanel
