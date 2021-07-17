import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import SignIn from './Components/auth/SignIn.jsx'
import SignUp from './Components/auth/SignUp.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Navbar from './Components/Layout/Navbar.jsx'

function App() {
  return (
    <Router>
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/' component={Dashboard} />
      </Switch>
    </Router>
  )
}

export default App
