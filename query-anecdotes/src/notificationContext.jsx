/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react'

const NotificationReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.payload
    case 'CLEAR_NOTIFICATION':
      return null
    default:
      return state
  }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(NotificationReducer, null)

  return (
    <NotificationContext.Provider value={[ notification, notificationDispatch ]}>
      {props.children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext