import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.css'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/Reducers/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {getFirebase, ReactReduxFirebaseProvider} from 'react-redux-firebase'
import firebase from './configs/fbConfig'
import {createFirestoreInstance} from 'redux-firestore'
import {useSelector} from 'react-redux'
import {isLoaded} from 'react-redux-firebase'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({getFirebase}))
)

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
}

function AuthIsLoaded({children}) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) {
    return (
      <div className='text-center'>
        <div
          className='spinner-grow text-primary'
          style={{width: '7em', height: '7em'}}
          role='status'
        >
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    )
  }
  return children
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
