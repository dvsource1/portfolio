// export interface MenuItemData {
//   title: string
//   icon?: any
// }

// export class MenuItemsData {
//   private _items: MenuItemData[][] = []
//   private _hasIcons: boolean = false

//   constructor(options: MenuItemData[][]) {
//     this._items = options
//     this._updateHasIconsState()
//   }

//   push(item: MenuItemData) {
//     if (!Array.isArray(this._items)) {
//       this._items = []
//     }
//     this._items.push(item)
//     this._updateHasIconsState()
//   }

//   remove(itemOrTitle: MenuItemData | string) {
//     if (typeof itemOrTitle === 'string') {
//       this._items.splice(
//         this._items.findIndex(i => i.title === itemOrTitle),
//         1,
//       )
//     } else {
//       this._items.splice(this._items.indexOf(itemOrTitle), 1)
//     }
//   }

//   get items(): MenuItemData[] {
//     return this._items || []
//   }

//   get hasIcons(): boolean {
//     return this._hasIcons
//   }

//   private _updateHasIconsState() {
//     this._hasIcons = this._items.some(i => !!i.icon)
//   }
// }
