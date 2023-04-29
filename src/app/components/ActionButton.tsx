import * as HIcons from '@heroicons/react/24/outline'
import { RouteAction } from 'dv/@types/route'
import { isString } from 'lodash'

const ActionButton = (props: {
  action: RouteAction
  onSideAction?: (action: RouteAction) => void
}) => {
  const { ...icons } = HIcons

  const hasIcon = !!props.action?.icon
  const HIcon: JSX.Element = hasIcon
    ? isString(props.action.icon)
      ? // @ts-ignore
        icons[props.action.icon]
      : props.action.icon
    : null

  return (
    <button
      className="flex h-12 w-full items-center justify-center border-y border-[#e5c07b]/40 pl-4 text-[#e5c07b]/60 hover:bg-[#e5c07b]/40 hover:text-white"
      onClick={() => {
        props.onSideAction?.(props.action)
      }}>
      {/* @ts-ignore */}
      {hasIcon && <HIcon className="h-6 w-6" />}

      <div className="ml-4">{props.action.name}</div>
    </button>
  )
}

export default ActionButton
