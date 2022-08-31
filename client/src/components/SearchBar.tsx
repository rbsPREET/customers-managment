import { BiSearch } from 'react-icons/bi'

export type SearchBarProps = {
  enableSearchBar: boolean
}

const SearchBar = () => {
  return (
    <div className='w-full sm:max-w-xs'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <div className='relative'>
        <div className='pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center'>
          <BiSearch />
        </div>
        <input
          id='search'
          name='search'
          className='block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm'
          placeholder='Search'
        />
      </div>
    </div>
  )
}

export default SearchBar
