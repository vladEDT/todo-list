import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {signOut} from '../../redux/actions/authActions'

const Navbar = ({signOut, uid}) => {
  return (
    <nav className='navbar navbar-light bg-light d-flex justify-content-center'>
      <NavLink to='/' className='navbar-brand'>
        <h3>TodoApp</h3>
      </NavLink>
      {uid ? (
        <NavLink to='/sign-in' className='nav-link' onClick={signOut}>
          Sign Out
        </NavLink>
      ) : (
        <>
          <NavLink to='/sign-in' className='nav-link'>
            Sign In
          </NavLink>
          <NavLink to='/sign-up' className='nav-link'>
            Sign Up
          </NavLink>
        </>
      )}
    </nav>
  )
}

const mapStateToProps = state => ({
  uid: state.firebase.auth.uid
})

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
