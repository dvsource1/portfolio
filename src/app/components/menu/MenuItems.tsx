import MenuItem from './MenuItem'
import { Menu as HLUI_Menu } from '@headlessui/react'

export interface MenuItemData {
  title: string
  icon?: any
}

export type MenuItemsProps = { options: MenuItemData[][]; isStatic?: boolean }

const MenuItems = (props: MenuItemsProps) => {
  const { options, isStatic } = props

  return (
    <HLUI_Menu.Items
      className="absolute left-0 w-52 divide-y divide-[#abb2bf] rounded-sm bg-[#abb2bf]/80"
      static={isStatic}>
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
    </HLUI_Menu.Items>
  )
}

export default MenuItems
