import SideBarIcon from './SideBarIcon'
import {
  BookOpenIcon,
  Cog8ToothIcon,
  HomeIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  RectangleStackIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

const SideBar = () => {
  const list1 = [
    { icon: HomeIcon, name: 'Home', active: false },
    { icon: RectangleStackIcon, name: 'Projects', active: true },
    { icon: BookOpenIcon, name: 'Blog' },
    { icon: ShoppingBagIcon, name: 'Store' },
    { icon: QuestionMarkCircleIcon, name: 'About' },
    { icon: PhoneIcon, name: 'Contact' },
  ]
  const list2 = [
    { icon: Cog8ToothIcon, name: 'Settings' },
    { icon: UserIcon, name: 'Profile' },
  ]

  return (
    <div className="flex h-screen w-12 flex-col bg-[#282c34]/95">
      {/* Logo */}
      <div className="flex h-12 w-full items-center justify-center bg-[#61AFEF] text-2xl font-extrabold text-white">
        DV
      </div>

      {/* Menu */}
      <div className="flex-1">
        <ul>
          {list1.map((item, i) => (
            <li className="" key={i}>
              <SideBarIcon
                icon={item.icon}
                tootip={item.name}
                active={item.active}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Login */}
      <div className="bg-[#e5c07b]/20">
        <ul>
          {list2.map((item, i) => (
            <li className="" key={i}>
              <SideBarIcon icon={item.icon} tootip={item.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar
