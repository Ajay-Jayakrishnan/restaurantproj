import {createStore,applyMiddleware,combineReducers}from 'redux'
import thunk from 'redux-thunk'


const reducers = combineReducers({

})

const midddleware = [thunk]
const store = createStore(reducers,applyMiddleware(...midddleware))
export default store