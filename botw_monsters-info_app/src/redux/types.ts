const ALL_MONSTERS = 'ALL_MONSTERS'
const MONSTER = 'MONSTERS'
export const GET_ALL_MONSTERS = ALL_MONSTERS + '/GET_ALL_MONSTERS'
export const ADD_MONSTER = ALL_MONSTERS + '/ADD_MONSTER'
export const GET_MONSTER = MONSTER + '/GET_MONSTER'

// Monster
export type Monster = {
  name: string
  image: string
}

// MonsterDetails
export type MonsterDetails = {
  name: string
  image: string
  description: string
  locations: string[]
  drops: string[]
}

// MonsterDetails str
export type MonsterDetailsStr = {
  name: string
  image: string
  description: string
  locations: string
  drops: string
}

export type MonsterState = {
  monster: MonsterDetails
  isLoading: boolean
  hasError: boolean
}

// Monsters
export type Monsters = Monster[]

// State (all monster information and current monster loaded)
export type MonstersState = {
  monsters: Monsters
  isLoading: boolean
  hasError: boolean
  isSending: boolean
  hasSendingError: boolean
}
