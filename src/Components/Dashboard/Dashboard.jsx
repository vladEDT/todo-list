import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import AddTask from '../tasks/AddTask'
import Tasks from '../tasks/Tasks'

const Dashboard = ({uid}) => {
  return (
    <div className='container'>
      {uid ? (
        <>
          <AddTask />
          <Tasks />
        </>
      ) : (
        <Redirect to='/sign-in' />
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  uid: state.firebase.auth.uid
})

export default connect(mapStateToProps)(Dashboard)
