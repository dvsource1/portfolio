import Link from 'next/link'

const Logo = (props: { onLogoClick?: () => void }) => {
  return (
    <Link
      href={'/'}
      className="flex h-12 w-full cursor-pointer items-center justify-center bg-[#61AFEF] text-2xl font-extrabold text-white">
      DV
    </Link>
  )
}

export default Logo
