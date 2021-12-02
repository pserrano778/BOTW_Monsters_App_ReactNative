import monstersReducer from './slices/monstersSlice'
import searchFilterReducer from './slices/searchFilterSlice'
import { configureStore } from '@reduxjs/toolkit'
import monsterReducer from './slices/monsterSlice'

// Create the store
const store = configureStore({
  reducer: {
    allMonsters: monstersReducer,
    searchFilter: searchFilterReducer,
    monsterDetails: monsterReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export default store
