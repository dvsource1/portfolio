import * as HIcons from '@heroicons/react/24/outline'
import { isString } from 'lodash'

type SideBarIconProps = { icon: any; tootip?: string; active?: boolean }

const SideBarIcon = (props: SideBarIconProps) => {
  const Icon = props.icon

  const { ...icons } = HIcons

  const hasIcon = !!props.icon
  const HIcon: JSX.Element = hasIcon
    ? isString(props.icon)
      ? // @ts-ignore
        icons[props.icon]
      : props.icon
    : null

  return (
    <div
      className={`flex h-12 items-center justify-center ${
        props.active ? 'bg-[#61AFEF]/20' : 'bg-transparent'
      } group cursor-pointer`}>
      {/* @ts-ignore */}
      <HIcon
        className={`h-6 w-6 ${
          props.active ? 'text-white' : 'text-[#abb2bf]'
        } group-hover:text-white`}
      />
      {props.tootip && (
        <span className="absolute left-12 scale-0 rounded-sm bg-[#e5c07b] px-2 py-1 text-xs font-bold text-[#61AFEF]/80 group-hover:scale-100">
          {props.tootip}
        </span>
      )}
    </div>
  )
}

export default SideBarIcon
