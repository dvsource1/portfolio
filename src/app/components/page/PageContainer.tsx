import Header from './Header'

const PageContainer = (props: any) => {
  const { children, title } = props

  return (
    <div className="flex h-screen flex-col">
      <Header title={title} />
      <div className="flex flex-1 flex-col overflow-y-scroll px-4 text-center">
        {children}
      </div>
    </div>
  )
}

export default PageContainer
