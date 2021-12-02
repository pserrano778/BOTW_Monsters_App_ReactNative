import { createAsyncThunk } from '@reduxjs/toolkit'
import { GET_ALL_MONSTERS, ADD_MONSTER, MonsterDetailsStr } from '../types'
import url from '../serverConnection'
import axios from 'axios'

// Action created with createAsyncThunk that get all the Monsters
export const getAllMonsters = createAsyncThunk(GET_ALL_MONSTERS, async () => {
  const response = await axios({
      method: 'GET',
      url: url + '/getAllMonsters'
    })
  const data= await response.data
  return data
})

// Action created with createAsyncThunk that post a new monster
export const addMonster = createAsyncThunk(
  ADD_MONSTER,
  async (monster: MonsterDetailsStr, thunkApi) => {
    console.log("POSt")
    const response = await axios({
      method: 'POST',
      url: url + '/addMonster',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
      data: monster
    })

    // Duplicated Key
    if (response.data && response.data === 11000) {
      return thunkApi.rejectWithValue('error')
    }
    return response.data
  }
)
