import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const SearchBar = () => {
  return (
    <div className="relative flex h-12 items-center">
      <input
        className="m-2 w-full rounded-sm border-2 border-[#282c34] bg-transparent pl-2 pr-8 text-lg text-[#abb2bf] caret-[#abb2bf] outline-0"
        type="text"
      />
      <MagnifyingGlassIcon className="absolute right-4 h-5 w-5 cursor-pointer text-[#282c34]" />
    </div>
  )
}

export default SearchBar
