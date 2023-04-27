import ActionButton from './ActionButton'
import SidePanelSearch from './SidePanelSearch'

const SidePanel = (props: any) => {
  const showContent = props?.options?.hasSearch

  return (
    <div className="flex h-screen w-60 flex-col bg-[#282c34]/95 md:w-72">
      <div className="flex-1">
        {/* Search */}
        {showContent && <SidePanelSearch />}
      </div>
      <div className="">
        {props?.actions.map((action: any) => {
          return <ActionButton action={action} />
        })}
      </div>
    </div>
  )
}

export default SidePanel
