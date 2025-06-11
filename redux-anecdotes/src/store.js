import { configureStore } from '@reduxjs/toolkit'
import { anecdoteReducer, filterReducer } from './reducers/reducers'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer
  }
})

export default store