export interface Route {
  slug: string
  name: string
  icon?: any
  options?: RouteOptions
}

export interface RouteOptions {
  hasSearch?: boolean
  actions: any[]
}

export interface RouteAction {
  name: string
}
