import { configureStore } from '@reduxjs/toolkit'
import anecdoteService from './services/anecdotes'
import { anecdoteReducer, filterReducer, notificationReducer, setAnecdotes } from './reducers/reducers'


const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer
  }
})

anecdoteService.getAll().then(anecdotes => 
  store.dispatch(setAnecdotes(anecdotes))
)

export default store