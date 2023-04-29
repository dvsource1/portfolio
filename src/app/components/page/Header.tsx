const Header = ({ title }: any) => {
  return (
    <header className="flex h-12 items-center justify-between p-2">
      <h1 className="text-2xl font-extrabold">{title}</h1>
      <div className="">...</div>
    </header>
  )
}

export default Header
