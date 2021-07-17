import {toast} from 'react-toastify'

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      toast.success('Welcome back!')
      return state
    case 'SIGN_IN_ERR':
      toast.error('Sign in error...')
      return state
    case 'SIGN_UP':
      toast.success('Sign up success!')
      return state
    case 'SIGN_UP_ERR':
      toast.error('Sign up error...')
      return state
    case 'SIGN_OUT':
      toast('Signed out...')
      return state
    default:
      return state
  }
}

export default authReducer
