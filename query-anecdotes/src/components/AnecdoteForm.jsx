import { useQueryClient } from "@tanstack/react-query"
import { useMutation } from "@tanstack/react-query"
import { createAnecdote } from "../services/requests"
import { useContext } from "react"
import NotificationContext from "../notificationContext"

const AnecdoteForm = () => {
  
  const [notification, notificationDispatch] = useContext(NotificationContext)
  const queryClient = useQueryClient()
  
  const mutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (data) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(data))
      notificationDispatch({
      type: 'SET_NOTIFICATION',
      payload: `you created '${data.content}'`
    })
    setTimeout(() => {
      notificationDispatch({ type: 'CLEAR_NOTIFICATION' })
    }, 5000)
    },
    onError: (error) => {
      notificationDispatch({
        type: 'SET_NOTIFICATION',
        payload: error.response.data.error
      })
      setTimeout(() => {
        notificationDispatch({ type: 'CLEAR_NOTIFICATION' })
      }, 5000)
    }
  })
  
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    mutation.mutate(content)
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
