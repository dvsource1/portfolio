import { RouteAction } from 'dv/@types/route'
import { forEach, get, isEmpty, set } from 'lodash'

export const ROOT_ACTIONS: RouteAction[] = [
  {
    icon: 'Cog8ToothIcon',
    name: 'Settings',
    children: [{ name: 'Languge', icon: 'LanguageIcon' }],
  },
  {
    icon: 'UserIcon',
    name: 'Profile',
    children: [
      { name: 'Profile', icon: 'UserCircleIcon' },
      {
        name: 'Login',
        icon: 'ArrowLeftOnRectangleIcon',
        callbackKey: 'signin',
        callback: () => {},
      },
      {
        name: 'Logout',
        icon: 'ArrowLeftOnRectangleIcon',
        callbackKey: 'signout',
        callback: () => {},
      },
    ],
  },
]

export const getRootActions = (callbacks: { [key: string]: () => void }) => {
  forEach(ROOT_ACTIONS, action => {
    if (action.callbackKey) {
      const callback = get(callbacks, action.callbackKey)
      set(action, 'callback', callback)
    }
    if (!isEmpty(action.children)) {
      forEach(action.children, action2 => {
        if (action2.callbackKey) {
          const callback = get(callbacks, action2.callbackKey)
          set(action2, 'callback', callback)
        }
      })
    }
  })
  return ROOT_ACTIONS
}
