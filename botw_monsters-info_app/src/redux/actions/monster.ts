import { createAsyncThunk } from '@reduxjs/toolkit'
import { GET_MONSTER } from '../types'
import url from '../serverConnection'
// Action created with createAyncThunk that get a Monster
export const getMonster = createAsyncThunk(
  GET_MONSTER,
  async (name: string) => {
    const response = await fetch(
      url + '/getMonster/' + name.replaceAll(' ', '_')
    )
    const json = await response.json()
    return json
  }
)
