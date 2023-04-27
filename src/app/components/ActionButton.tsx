import { BookOpenIcon } from '@heroicons/react/24/outline'

const ActionButton = (props: any) => {
  return (
    <button
      className="flex h-12 w-full items-center justify-center border-y border-[#e5c07b]/40 pl-4 text-[#e5c07b]/60 hover:bg-[#e5c07b]/40 hover:text-white"
      onClick={() => {
        props?.onSideAction(props.action)
      }}>
      <div className="">
        <BookOpenIcon className="h-6 w-6" />
      </div>
      <div className="ml-4">{props.action.name}</div>
    </button>
  )
}

export default ActionButton
