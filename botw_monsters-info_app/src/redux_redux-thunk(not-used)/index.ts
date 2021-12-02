import { applyMiddleware, createStore } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import monstersReducer from './reducers/monsters'
import { State, Action } from './types'

const INITIAL_STATE: State = {
  monsters: [],
  monsterDetails: {
    id: -1,
    name: '',
    image: '',
    description: '',
    locations: [],
    drops: [],
  },
  filter: '',
}
const middleware = [thunk as ThunkMiddleware<State, Action>]

// Create the store
export default createStore(
  monstersReducer,
  INITIAL_STATE,
  applyMiddleware(...middleware)
)
