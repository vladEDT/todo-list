import moment from 'moment'
import {connect} from 'react-redux'
import {removeTask, toggleChecked} from '../../redux/actions/taskActions'
import Check from './Check'

const Task = ({task, removeTask, toggleChecked}) => {
  const handleRemove = task => {
    removeTask(task)
  }

  const handleCheck = task => {
    toggleChecked(task)
  }

  return (
    <tr>
      <th>{task.task}</th>
      <td>{moment(task.date.toDate()).calendar()}</td>
      <td>
        <Check checked={task.checked} onClick={() => handleCheck(task)} />
      </td>
      <td>
        <span
          className='material-icons text-danger'
          style={{cursor: 'pointer'}}
          onClick={() => handleRemove(task)}
        >
          delete
        </span>
      </td>
    </tr>
  )
}

const mapDispatchToProps = dispatch => ({
  removeTask: task => dispatch(removeTask(task)),
  toggleChecked: task => dispatch(toggleChecked(task))
})

export default connect(null, mapDispatchToProps)(Task)
