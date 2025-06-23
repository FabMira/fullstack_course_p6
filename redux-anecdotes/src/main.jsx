import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'


console.log(store.getState());

store.subscribe(() => {console.log('state changed', store.getState())})
// store.dispatch(filterChange('code'))
// store.dispatch(createAnecdote('Pariatur sit elit mollit tempor deserunt.'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

