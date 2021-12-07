import axios from 'axios'
import {
  getMonster,
} from '../../../../../src/redux/actions/monster'
import { configureStore } from '@reduxjs/toolkit'
import monsterReducer from '../../../../../src/redux/slices/monsterSlice'

// Create the store

// Mock HTTP requests
jest.mock('axios')


const initialState = {
  monster: {
    name: '',
    image: '',
    description: '',
    drops: [],
    locations: []
  },
  isLoading: false,
  hasError: false
}

describe('Test get a monster', () => {
  let store
  beforeEach(() => {
    // Create mocked store to test Redux actions
    store = configureStore({
    reducer: {
      monsterDetails: monsterReducer,
      },
    })
  });

  const data = {
    data:  {
    description: "These fearsome monsters have lived in Hyrule since ancient times. They possess intense intelligence, resilience, and strength, making them among the most dangerous monsters in all the land. This is compounded by the fact that they have a natural resistance to all elements. You would be wise to challenge a Lynel only if you're very well prepared.",
    drops: [ 'lynel horn', 'lynel hoof', 'lynel guts' ],
    image: 'https://botw-compendium.herokuapp.com/api/v2/entry/lynel/image',
    locations: [ 'Lanayru Great Spring', 'Hyrule Field' ],
    name: 'Lynel'
    }
  }
  const monsterName = 'Lynel'
  test ('test get monster correctly', async() => {
    
    axios.mockImplementationOnce(() => Promise.resolve(data))

    await store.dispatch(getMonster(monsterName))

      const state = store.getState().monsterDetails;

      expect(state).toMatchObject({...initialState, monster: data.data});
  })
   
  test ('test error when getting monster', async() => {
    
    axios.mockImplementationOnce(() => {
        throw 'ERROR';
      });

    await store.dispatch(getMonster(monsterName))

      const state = store.getState().monsterDetails;

      expect(state).toMatchObject({...initialState, hasError: true});
  })
})