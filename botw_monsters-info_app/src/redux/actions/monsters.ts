import { createAsyncThunk } from '@reduxjs/toolkit'
import { GET_ALL_MONSTERS, ADD_MONSTER, MonsterDetailsStr } from '../types'
import url from '../serverConnection'

// Action created with createAsyncThunk that get all the Monsters
export const getAllMonsters = createAsyncThunk(GET_ALL_MONSTERS, async () => {
  const response = await fetch(url + '/getAllMonsters')
  const json = await response.json()
  return json
})

// Action created with createAsyncThunk that post a new monster
export const addMonster = createAsyncThunk(
  ADD_MONSTER,
  async (monster: MonsterDetailsStr, thunkApi) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(monster as MonsterDetailsStr),
    }
    const response = await fetch(url + '/addMonster', requestOptions)
    const json = await response.json()
    // Duplicated Key

    if (json.code && json.code === 11000) {
      return thunkApi.rejectWithValue('error')
    }
    return json
  }
)
