import Task from './Task'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

const Tasks = ({tasks}) => {
  return (
    <div className='container mt-3'>
      <table className='table table-dark'>
        <thead>
          <tr className='text-info'>
            <th scope='col'>Tasks</th>
            <th scope='col'>Added On</th>
            <th scope='col'>Status</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((task, index) => <Task task={task} key={index} />)}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = state => {
  const tasks = state.firestore.ordered.tasks
  return {
    tasks: tasks,
    uid: state.firebase.auth.uid
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(ownProps => [
    {
      collection: 'tasks',
      where: ['authorId', '==', ownProps.uid],
      orderBy: ['date', 'desc']
    }
  ])
)(Tasks)
