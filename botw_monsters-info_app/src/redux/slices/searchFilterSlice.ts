import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../index'

export const searchFilterSlice = createSlice({
  name: 'searchFilter',
  initialState: '',
  reducers: {
    setSearchFilter: (state, action) => (state = action.payload),
    clearSearchFilter: (state) => (state = ''),
  },
})

export const { setSearchFilter, clearSearchFilter } = searchFilterSlice.actions

export const selectSearchFilter = (state: RootState): string =>
  state.searchFilter

export default searchFilterSlice.reducer
