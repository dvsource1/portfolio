import SearchBar from './SearchBar'
import SearchCard from './SearchCard'

const SidePanelSearch = () => {
  return (
    <div className="">
      <SearchBar />

      {/* Results */}
      <div className="px-2">
        <div className="text-xs text-[#abb2bf]">8 RESULTS</div>
        <div className="rouded-md mt-2 space-y-2 text-sm">
          {[1, 2, 3, 4].map(i => {
            return <SearchCard key={i} />
          })}
        </div>
      </div>
    </div>
  )
}

export default SidePanelSearch
