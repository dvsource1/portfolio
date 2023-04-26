import KebabMenu from './menu/KebabMenu'

const PageContainer = (props: any) => {
  const { children, title } = props

  return (
    <div className="px-4">
      <div className="flex h-8 items-center justify-between">
        <h1 className="text-2xl font-extrabold">{title}</h1>
        <div className="">
          {/* <Menu as="div">
            <Menu.Button>...</Menu.Button>
            <Menu.Items as="ul">
              <Menu.Item as="li">Edit</Menu.Item>
            </Menu.Items>
          </Menu> */}
          <KebabMenu options={[[{ title: 'Edit' }]]} />
        </div>
      </div>
      <div className="mt-4 text-center">{children}</div>
    </div>
  )
}

export default PageContainer
