import reducer, {
  clearMonster,
} from '../../../../../src/redux/slices/monsterSlice'
import {
  getMonster,
} from '../../../../../src/redux/actions/monster'
import { MonsterDetails, MonsterState } from '../../../../../src/redux/types'

// Initial State
const initialState = {
  monster: {
    name: '',
    image: '',
    description: '',
    locations: [],
    drops: [],
  },
  isLoading: false,
  hasError: false,
} as MonsterState

const monster = {
  name: 'Lynel',
  description:
    "These fearsome monsters have lived in Hyrule since ancient times. They possess intense intelligence, resilience, and strength, making them among the most dangerous monsters in all the land. This is compounded by the fact that they have a natural resistance to all elements. You would be wise to challenge a Lynel only if you're very well prepared.",
  image: 'https://botw-compendium.herokuapp.com/api/v2/entry/lynel/image',
  locations: ['Lanayru Great Spring', 'Hyrule Field'],
  drops: ['lynel horn', 'lynel hoof', 'lynel guts'],
} as MonsterDetails

describe('Monster redux state tests', () => {

  // Check monsterDetails clear
  test('should handle new monsters details clear', () => {
    const state = {
      monster: monster,
      isLoading: false,
      hasError: false,
    } as MonsterState

    expect(reducer(state, clearMonster)).toEqual(initialState)
  })

  // Test if can gat a monster
  test('Should be able to get a monster', async () => {
    // Call reducer to get the monster
    expect(
      reducer(
        { ...initialState },
        { type: getMonster.fulfilled, payload: monster }
      )
    ).toEqual({ ...initialState, monster: monster })
  })

  // Test if change state when it starts loading data
  test('Should change state when it starts loading data', async () => {
    // Call reducer to get the monster
    expect(
      reducer(
        { ...initialState },
        { type: getMonster.pending, payload: monster }
      )
    ).toEqual({ ...initialState, isLoading: true })
  })

  // Test if change state when it is rejected
  test('Should change state when it is rejected', async () => {
    // Call reducer to get the monster
    expect(
      reducer(
        { ...initialState },
        { type: getMonster.rejected, payload: monster }
      )
    ).toEqual({ ...initialState, hasError: true })
  })
})