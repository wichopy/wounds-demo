import React from 'react'
import PropTypes from 'prop-types'
import WoundList from './WoundList'
import PatientProfile from '../components/PatientProfile'

class PatientProfileContainer extends React.Component {
  static propTypes = {
    selectedPatient: PropTypes.object
  }

  render() {
    const { selectedPatient } = this.props
    return (
      <div>
        <PatientProfile {...selectedPatient.attributes} />
        <WoundList selectedPatient={selectedPatient} />
      </div>
    )
  }
}

export default PatientProfileContainer
