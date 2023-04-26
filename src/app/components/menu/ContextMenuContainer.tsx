import ContextMenu from './ContextMenu'
import { PencilIcon } from '@heroicons/react/24/outline'

export type ContextMenuContainerProps = {
  clicked: boolean
  x: number
  y: number
}

const ContextMenuContainer = ({ clicked, x, y }: ContextMenuContainerProps) => {
  const options = [
    [
      { title: 'Edit', icon: PencilIcon },
      { title: 'Edit', icon: PencilIcon },
      { title: 'Edit', icon: PencilIcon },
      { title: 'Edit', icon: PencilIcon },
    ],
    [{ title: 'Hi!', icon: PencilIcon }],
  ]

  return <>{clicked && <ContextMenu top={y} left={x} options={options} />}</>
}

export default ContextMenuContainer
