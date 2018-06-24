import React from 'react'
import Network from '../utils/network'
import PatientList from '../components/PatientList'
import { displayPatientProfile } from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {
    patients: state.patients
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPatientClick: id => {
      dispatch(displayPatientProfile(id))
    }
  }
}

const FetchedPatientList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientList)

// class PatientList extends React.Component {
//   state = { patients: undefined }
//   componentDidMount() {
//     Network.get("http://localhost:3000/patients").then(res => this.setState({ patients: res.data }))
//   }
//   render() {
//     return <PatientList patients={this.state.patients} />
//   }
// }

export default FetchedPatientList
