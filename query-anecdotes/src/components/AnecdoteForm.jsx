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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    }
  })
  
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    if (content.length < 5) {
      return
    }
    console.log('creating', content);
    mutation.mutate(content)
    notificationDispatch({
      type: 'SET_NOTIFICATION',
      payload: `you created '${content}'`
    })
    setTimeout(() => {
      notificationDispatch({ type: 'CLEAR_NOTIFICATION' })
    }, 5000)

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
