import Header from './Header'

const PageContainer = (props: any) => {
  const { children, title } = props

  return (
    <div className="px-4">
      <Header title={title} />
      <div className="mt-4 text-center">{children}</div>
    </div>
  )
}

export default PageContainer
