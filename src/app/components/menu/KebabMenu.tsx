import MenuItem from './MenuItem'
import { MenuItemData } from './MenuItems'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'

export type KebabMenuProps = { options: MenuItemData[][] }

const KebabMenu = (props: KebabMenuProps) => {
  const { options } = props
  return (
    // <Menu>
    //   <Menu.Button>...</Menu.Button>
    //   <Menu.Items>
    //     <Menu.Item>1</Menu.Item>
    //     <Menu.Item>2</Menu.Item>
    //     <Menu.Item>3</Menu.Item>
    //   </Menu.Items>
    // </Menu>
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Options
          <ChevronDownIcon
            className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute left-0 w-52 divide-y divide-[#abb2bf] rounded-sm bg-[#abb2bf]/80">
          {/* <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                  Delete
                </button>
              )}
            </Menu.Item>
          </div> */}
          {(options || []).map((group, i) => {
            return (
              <div key={i} className="">
                {group.map((item, j: any) => {
                  return (
                    <MenuItem key={j} icon={item.icon}>
                      {item.title}
                    </MenuItem>
                  )
                })}
              </div>
            )
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default KebabMenu
