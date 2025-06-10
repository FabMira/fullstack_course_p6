import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import { anecdoteReducer, filterReducer } from './reducers/reducers'
import { createAnecdote, filterChange } from './reducers/reducers'


const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer
})

const store = createStore(reducer)

console.log(store.getState());

store.subscribe(() => {console.log('state changed', store.getState())})
store.dispatch(filterChange('code'))
store.dispatch(createAnecdote('Pariatur sit elit mollit tempor deserunt.'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

