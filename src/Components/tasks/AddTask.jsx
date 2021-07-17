import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTask} from '../../redux/actions/taskActions'

class AddTask extends Component {
  state = {
    task: '',
    checked: 'false'
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTask(this.state)
    this.setState({
      task: ''
    })
  }

  render() {
    return (
      <form className='m-3' autoComplete='off' onSubmit={this.handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='task' className='form-label'>
            Add a task
          </label>
          <input
            type='text'
            className='form-control'
            id='task'
            value={this.state.task}
            onChange={this.handleChange}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Add
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task))
})

export default connect(null, mapDispatchToProps)(AddTask)
