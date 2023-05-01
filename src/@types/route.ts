export interface Route {
  slug: string
  name: string
  icon?: string | any
  options?: RouteOptions
}

export interface RouteOptions {
  hasSearch?: boolean
  actions?: RouteAction[]
}

export interface RouteAction {
  name: string
  icon?: string | any
  children?: RouteAction[]
  callbackKey?: string
  callback?: () => void
}
