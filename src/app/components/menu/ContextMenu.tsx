import MenuItems, { MenuItemData } from './MenuItems'
import { Menu as HLUI_Menu } from '@headlessui/react'

export type ContextMenuProps = {
  top?: number | 'unset'
  bottom?: number | 'unset'
  left?: number | 'unset'
  right?: number | 'unset'
  options: MenuItemData[][]
}

// jqAV6gq7B

const ContextMenu = (props: ContextMenuProps) => {
  const { top, left, options } = props

  return (
    <HLUI_Menu
      as="div"
      className="absolute inline-block text-left"
      style={{
        top: `${top}px`,
        left: `${left}px`,
        bottom: 'unset',
        right: 'unset',
      }}>
      <MenuItems options={options} isStatic />
    </HLUI_Menu>
  )
}

export default ContextMenu
