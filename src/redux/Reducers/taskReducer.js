import {toast} from 'react-toastify'

const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      toast.success('Added a task')
      return state
    case 'ADD_TASK_ERR':
      toast.error('An error occurred')
      return state
    case 'REMOVE_TASK':
      toast.warn('A task was removed...')
      return state
    case 'REMOVE_TASK_ERR':
      toast.error('A task remove error occurred...')
      return state
    case 'TOGGLE_CHECKED':
      toast.success('Congtrats with finishing a task!')
      return state
    case 'TOGGLE_CHECKED_ERR':
      toast.error('While changing status an error occurred...')
      return state
    default:
      return state
  }
}

export default taskReducer
