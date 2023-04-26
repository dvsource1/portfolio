import { Menu as HLUI_Menu } from '@headlessui/react'

export type MenuItemProps = { icon: any; children?: any }

const MenuItem = (props: MenuItemProps) => {
  const { icon: Icon, children } = props

  return (
    <HLUI_Menu.Item>
      {({ active }) => (
        <button
          className={`${
            active ? 'bg-[#abb2bf]/50 text-white' : 'text-gray-900'
          }  flex w-full items-center rounded-sm px-2 py-2 text-sm`}>
          <Icon className="mr-2 h-5 w-5" aria-hidden="true" />
          {children}
        </button>
      )}
    </HLUI_Menu.Item>
  )
}

export default MenuItem
