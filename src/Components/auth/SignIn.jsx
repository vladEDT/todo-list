import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../redux/actions/authActions'
import {Redirect} from 'react-router-dom'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.signIn(this.state)
  }

  render() {
    const {uid} = this.props
    if (uid) {
      return <Redirect to='/' />
    }
    return (
      <form
        className='container mt-5'
        autoComplete='off'
        onSubmit={this.handleSubmit}
      >
        <legend>
          <h4>Sign In</h4>
        </legend>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            onChange={this.handleChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='password'
            onChange={this.handleChange}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Sign In
        </button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  uid: state.firebase.auth.uid
})

const mapDispatchToProps = dispatch => ({
  signIn: creds => dispatch(signIn(creds))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
