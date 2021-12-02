import { createSlice } from '@reduxjs/toolkit'
import { MonsterDetails, MonsterState } from '../types'
import { getMonster } from '../actions/monster'
import { RootState } from '../index'

// Set the initial state
const initialState = {
  monster: {
    name: '',
    image: '',
    description: '',
    locations: [],
    drops: [],
  },
  isLoading: false,
  hasError: false,
} as MonsterState

// Create the slice
const monsterSlice = createSlice({
  name: 'monsterDetails',
  initialState,
  // Clear Monster reducer
  reducers: { clearMonster: (state) => (state = initialState) },
  extraReducers: (builder) => {
    // Bulder callback to set the advanced Reducers
    builder.addCase(getMonster.fulfilled, (state, { payload }) => {
      state.monster = {
        name: payload.name,
        image: payload.image,
        description: payload.description,
        locations: payload.locations,
        drops: payload.drops,
      }
      state.isLoading = false
      state.hasError = false
    })
    builder.addCase(getMonster.rejected, (state) => {
      state.isLoading = false
      state.hasError = true
    })
    builder.addCase(getMonster.pending, (state) => {
      state.isLoading = true
      state.hasError = false
    })
  },
})

export const selectMonster = (state: RootState): MonsterDetails =>
  state.monsterDetails.monster
export const { clearMonster } = monsterSlice.actions
export const isLoadingMonster = (state: RootState): boolean =>
  state.monsterDetails.isLoading
export const hasError = (state: RootState): boolean =>
  state.monsterDetails.hasError

export default monsterSlice.reducer
