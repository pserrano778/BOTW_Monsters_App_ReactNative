import reducer from '../../../../../src/redux/slices/monstersSlice'

import {
  Monster,
  Monsters,
} from '../../../../../src/redux/types'
import {
  getAllMonsters,
  addMonster,
} from '../../../../../src/redux/actions/monsters'

// Initial State
const initialState = {
  monsters: [] as Monsters,
  isLoading: false,
  hasError: false,
  isSending: false,
  hasSendingError: false,
}

// Create the new Monster
const monster = {
  name: 'Lynel',
  image: 'https://botw-compendium.herokuapp.com/api/v2/entry/lynel/image',
} as Monster

// Create monsters Array
const monsters = [monster] as Monsters

describe('All monsters redux state tests', () => {

  // Test if a monster can be added
  test('Should be able to add a new monster', async () => {
    // Call reducer to add the monster
    expect(
      reducer(
        { ...initialState },
        { type: addMonster.fulfilled, payload: monster }
      )
    ).toEqual({ ...initialState, monsters: [monster] })
  })

  // Test if change state when it starts loading data
  test('Should change state when it starts loading data', async () => {
    // Call reducer to add the monster
    expect(
      reducer(
        { ...initialState },
        { type: addMonster.pending, payload: monster }
      )
    ).toEqual({ ...initialState, isSending: true })
  })

  // Test if change state when it is rejected
  test('Should change state when it is rejected', async () => {
    // Call reducer to add the monster
    expect(
      reducer(
        { ...initialState },
        { type: addMonster.rejected, payload: monster }
      )
    ).toEqual({ ...initialState, hasSendingError: true })
  })

  // Test if all monster can be added
  test('Should be able to add all monsters', async () => {
    // Call reducer to add the monster
    expect(
      reducer(
        { ...initialState },
        { type: getAllMonsters.fulfilled, payload: monsters }
      )
    ).toEqual({ ...initialState, monsters: monsters })
  })

  // Test if change state when it starts loading data
  test('Should change state when it starts loading monsters data', async () => {
    // Call reducer to add monsters
    expect(
      reducer(
        { ...initialState },
        { type: getAllMonsters.pending, payload: monsters }
      )
    ).toEqual({ ...initialState, isLoading: true })
  })

  // Test if change state when it is rejected
  test('Should change state when it is rejected loading monsters data', async () => {
    // Call reducer to add monsters
    expect(
      reducer(
        { ...initialState },
        { type: getAllMonsters.rejected, payload: monsters }
      )
    ).toEqual({ ...initialState, hasError: true })
  })
})
