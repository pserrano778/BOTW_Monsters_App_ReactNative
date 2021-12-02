import { Reducer } from 'redux'
import {
  ALL_MONSTERS,
  FILTER_ALL_MONSTERS,
  ADD_MONSTER,
  GET_MONSTER,
  RESET_MONSTER,
  State,
  Action,
  Monsters,
  MonsterDetailsRaw,
} from '../types'

const monstersReducer: Reducer<State, Action> = (state, action) => {
  // get type and payload
  const { type, payload } = action

  // We need to avoid apply actions to an undefined state
  if (state === undefined) {
    return state
  }
  // Get all monsters
  else if (type === ALL_MONSTERS) {
    return {
      ...state,
      monsters: payload as Monsters,
    }
  }
  // Set monsters filter
  else if (type === FILTER_ALL_MONSTERS) {
    return {
      ...state,
      filter: payload as string,
    }
  }
  // Add a new monster
  else if (type === ADD_MONSTER) {
    return state
  }
  // Get Monster information
  else if (type === GET_MONSTER) {
    return {
      ...state,
      monsterDetails: {
        id: (payload as MonsterDetailsRaw).id,
        name: (payload as MonsterDetailsRaw).name,
        image: (payload as MonsterDetailsRaw).image,
        description: (payload as MonsterDetailsRaw).description,
        locations: (payload as MonsterDetailsRaw).common_locations,
        drops: (payload as MonsterDetailsRaw).drops,
      },
    }
  }
  // Clear the current monster information
  else if (type === RESET_MONSTER) {
    return {
      ...state,
      monsterDetails: {
        id: -1,
        name: '',
        image: '',
        description: '',
        locations: [],
        drops: [],
      },
    }
  }
  // Default case
  else {
    return state
  }
}

export default monstersReducer
