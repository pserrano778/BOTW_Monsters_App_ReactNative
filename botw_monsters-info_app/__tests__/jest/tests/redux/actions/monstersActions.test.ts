import axios from 'axios'
import {
  getAllMonsters,
  addMonster
} from '../../../../../src/redux/actions/monsters'
import { configureStore } from '@reduxjs/toolkit'
import monstersReducer from '../../../../../src/redux/slices/monstersSlice'

// Create the store

// Mock HTTP requests
jest.mock('axios')


const initialState = {
  monsters: [],
  isLoading: false,
  hasError: false,
  isSending: false,
  hasSendingError: false,
}

describe('Test monsters actions', () => {
  let store
  beforeEach(() => {
    // Create mocked store to test Redux actions
    store = configureStore({
    reducer: {
      monsters: monstersReducer,
      },
    })
  });

  const data = {
    data:  [
        {
            description: "These fearsome monsters have lived in Hyrule since ancient times. They possess intense intelligence, resilience, and strength, making them among the most dangerous monsters in all the land. This is compounded by the fact that they have a natural resistance to all elements. You would be wise to challenge a Lynel only if you're very well prepared.",
            drops: [ 'lynel horn', 'lynel hoof', 'lynel guts' ],
            image: 'https://botw-compendium.herokuapp.com/api/v2/entry/lynel/image',
            locations: [ 'Lanayru Great Spring', 'Hyrule Field' ],
            name: 'Lynel'
        },
        {
            description: "Test description.",
            drops: [ 'test-drops' ], 
            image: 'test-image',
            locations: [ 'Test-location' ],
            name: 'Test'
        }
    ]
  }

  const newMonster = {
      description: "New Test description.",
        drops: 'new test-drops' , 
        image: 'new test-image',
        locations: 'new Test-location' ,
        name: 'Test new monster'
  }
  
  test ('test get all monsters correctly', async() => {
    
    axios.mockImplementationOnce(() => Promise.resolve(data))

    await store.dispatch(getAllMonsters())

    const state = store.getState().monsters;
    
    expect(state).toMatchObject({...initialState, monsters: data.data});
  })
   
  test ('test error when getting all monsters', async() => {
    
    axios.mockImplementationOnce(() => {
        throw 'ERROR';
      });

    await store.dispatch(getAllMonsters())

    const state = store.getState().monsters;
    
    expect(state).toMatchObject({...initialState, hasError: true});
  })


  test ('test add new monster correctly', async() => {

    const addedData = {
        data: {
        description: "New Test description.",
            drops: ['new test-drops'] , 
            image: 'new test-image',
            locations: ['new Test-location'] ,
            name: 'Test new monster'
        }
    }

    axios.mockImplementationOnce(() => Promise.resolve(addedData))

    await store.dispatch(addMonster(newMonster))

    const state = store.getState().monsters;

    expect(state).toMatchObject({...initialState, monsters: [...initialState.monsters, addedData.data]});
  })

  test ('test add new monster with error', async() => {

    const addedData = {
        data: {
        description: "New Test description.",
            drops: ['new test-drops'] , 
            image: 'new test-image',
            locations: ['new Test-location'] ,
            name: 'Test new monster'
        }
    }

    axios.mockImplementationOnce(() => {
        throw 'ERROR';
      });

    await store.dispatch(addMonster(newMonster))

    const state = store.getState().monsters;

    expect(state).toMatchObject({...initialState, hasSendingError: true});
  })
})