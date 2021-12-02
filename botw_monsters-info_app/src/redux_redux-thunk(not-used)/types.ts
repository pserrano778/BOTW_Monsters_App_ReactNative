export const ALL_MONSTERS = 'ALL_MONSTERS'
export const ADD_MONSTER = 'ADD_MONSTER'
export const GET_MONSTER = 'GET_MONSTER'
export const RESET_MONSTER = 'RESET_MONSTER'
export const FILTER_ALL_MONSTERS = 'FILTER_ALL_MONSTERS'

// Monster
type Monster = {
  id: number
  name: string
  image: string
}

// MonsterDetails
export type MonsterDetails = {
  id: number
  name: string
  image: string
  description: string
  locations: []
  drops: []
}

// MonsterDetails
export type MonsterDetailsRaw = {
  id: number
  name: string
  image: string
  description: string
  common_locations: []
  drops: []
}

// Monsters
export type Monsters = Monster[]

// State (all monster information and current monster loaded)
export type State =
  | undefined
  | {
      monsters: Monsters
      monsterDetails: MonsterDetails
      filter: string
    }

// Export Actions
export type getAllMonsterAction = {
  type: 'ALL_MONSTERS'
  payload: Monsters
}

export type filterAllMonstersAction = {
  type: 'FILTER_ALL_MONSTERS'
  payload: string
}

export type addMonsterAction = {
  type: 'ADD_MONSTER'
  payload: MonsterDetails
}

export type getMonsterAction = {
  type: 'GET_MONSTER'
  payload: MonsterDetailsRaw
}

export type resetMonsterAction = {
  type: 'RESET_MONSTER'
  payload?: never
}

// Export the types of actions
export type Action =
  | getAllMonsterAction
  | filterAllMonstersAction
  | addMonsterAction
  | getMonsterAction
  | resetMonsterAction
