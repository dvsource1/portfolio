import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const SidePanel = (props: any) => {
  const s = true

  return (
    <div className="flex h-screen w-60 flex-col bg-[#282c34]/95">
      <div className="flex-1">
        {/* Search */}
        {props?.options?.hasSearch && (
          <div className="">
            <div className="relative flex h-12 items-center">
              <input
                className="m-2 w-full rounded-sm border-2 border-[#282c34] bg-transparent pl-2 pr-8 text-lg text-[#abb2bf] caret-[#282c34] outline-0"
                type="text"
              />
              <MagnifyingGlassIcon className="absolute right-4 h-5 w-5 cursor-pointer text-[#282c34]" />
            </div>

            {/* Results */}
            <div className="px-2">
              <div className="text-xs text-[#abb2bf]">8 RESULTS</div>
              <div className="rouded-md mt-2 space-y-2 text-sm">
                {[1, 2, 3, 4].map(i => {
                  return (
                    <div className="border-2 border-[#61afef]/40 p-2 text-[#61afef]/60 hover:bg-[#61afef]/40 hover:text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="">
        {props?.actions.map((action: any) => {
          return (
            <button
              className="flex h-12 w-full items-center border-y border-[#e5c07b]/40 pl-4 text-[#e5c07b]/60 hover:bg-[#e5c07b]/40 hover:text-white"
              onClick={() => {
                props?.onSideAction(action)
              }}>
              <div className="">{action.name}</div>
              <div className="">{action.name}</div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default SidePanel
