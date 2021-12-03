import { createAsyncThunk } from '@reduxjs/toolkit'
import { GET_MONSTER } from '../types'
import url from '../serverConnection'
import axios from 'axios'
// Action created with createAyncThunk that get a Monster
export const getMonster = createAsyncThunk(
  GET_MONSTER,
  async (name: string) => {
    
    const response = await axios({
      method: 'GET',
      url: url + '/getMonster/' + name.replace(/ /g, '_')
    })
    console.log(response)
    const data = response.data
    return data
  }
)
