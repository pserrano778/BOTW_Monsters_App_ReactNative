import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { Dispatch } from 'redux'

import {
  ALL_MONSTERS,
  ADD_MONSTER,
  GET_MONSTER,
  RESET_MONSTER,
  FILTER_ALL_MONSTERS,
  getAllMonsterAction,
  filterAllMonstersAction,
  addMonsterAction,
  getMonsterAction,
  resetMonsterAction,
  State,
} from '../types'

// Fetch all monsters from the API
export const getAllMonsters = (): ThunkAction<
  void,
  State,
  unknown,
  getAllMonsterAction
> => {
  return async (dispatch) => {
    const response = await fetch(
      'https://botw-compendium.herokuapp.com/api/v2/category/monsters'
    )
    const json = await response.json()

    dispatch({
      type: ALL_MONSTERS,
      payload: json.data,
    })
  }
}

// Set the name to filter by all the monsters
export const filterAllMonsters = (
  filter: string
): ThunkAction<void, State, unknown, filterAllMonstersAction> => {
  return (dispatch: Dispatch<filterAllMonstersAction>) => {
    dispatch({
      type: FILTER_ALL_MONSTERS,
      payload: filter,
    })
  }
}

// Add a new monster
export const addMonster = (): ThunkAction<
  void,
  State,
  unknown,
  addMonsterAction
> => {
  return async (dispatch: ThunkDispatch<State, unknown, addMonsterAction>) => {
    const response = await fetch(
      'https://botw-compendium.herokuapp.com/api/v2/category/monsters'
    )
    const json = await response.json()

    dispatch({
      type: ADD_MONSTER,
      payload: json.data,
    })
  }
}

// Fetch all the information about a Monster from the API
export const getMonster = (
  name: string
): ThunkAction<void, State, unknown, getMonsterAction> => {
  return async (dispatch: ThunkDispatch<State, unknown, getMonsterAction>) => {
    const response = await fetch(
      'https://botw-compendium.herokuapp.com/api/v2/entry/' +
        name.replace('_', ' ')
    )
    const json = await response.json()

    dispatch({
      type: GET_MONSTER,
      payload: json.data,
    })
  }
}

// Reset the state of the current monster
export const resetMonster = (): ThunkAction<
  void,
  State,
  unknown,
  resetMonsterAction
> => {
  return (dispatch: Dispatch<resetMonsterAction>) => {
    dispatch({
      type: RESET_MONSTER,
    })
  }
}
