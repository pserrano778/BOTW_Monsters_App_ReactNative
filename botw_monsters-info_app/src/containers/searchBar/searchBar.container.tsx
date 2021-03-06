import React from 'react'
import SearchBar from '../../components/searchBar/searchBar.component'
import {
  selectSearchFilter,
  setSearchFilter,
} from '../../redux/slices/searchFilterSlice'
import { useDispatch, useSelector } from 'react-redux'

// Event interface
interface Event {
  target: { value: string }
}

// Function that Track the filter
const SearchBarContainer: React.FC = () => {
  const dispatch = useDispatch()
  const searchFilter = useSelector(selectSearchFilter)

  // Change the value
  const handleChange = (value: string) => {
    dispatch(setSearchFilter(value))
  }

  // Return a searchBar
  return <SearchBar value={searchFilter} onChange={handleChange} />
}
export default SearchBarContainer
