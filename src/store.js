import {createStore,applyMiddleware,combineReducers}from 'redux'
import thunk from 'redux-thunk'
import { restaurantListReducer } from './reducers/restaurantReducer'


const reducers = combineReducers({
restaurantReducer :restaurantListReducer
})

const midddleware = [thunk]
const store = createStore(reducers,applyMiddleware(...midddleware))
export default store