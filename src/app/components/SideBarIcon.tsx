type SideBarIconProps = { icon: any; tootip?: string; active?: boolean }

const SideBarIcon = (props: SideBarIconProps) => {
  const Icon = props.icon;

  return (
    <div className={`flex h-12 items-center justify-center border-l-2 ${props.active ? 'border-white' : 'border-transparent'} cursor-pointer group`}>
      <Icon className={`h-6 w-6 ${props.active ? 'text-white' : 'text-[#abb2bf]'} group-hover:text-white`} />
      {
        props.tootip &&
        <span className="absolute left-12 scale-0 rounded-sm bg-[#e5c07b] px-2 py-1 text-xs text-[#61AFEF]/80 font-bold group-hover:scale-100">
          {props.tootip}
        </span>
      }
    </div>
  )
}

export default SideBarIcon;