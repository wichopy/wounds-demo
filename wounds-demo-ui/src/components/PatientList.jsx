import React from 'react'
import PatientListItem from './PatientListItem'

const PatientList = ({ patients }) => {
  if (!patients) {
    return <h1>...loading...</h1>
  }

  if (patients.length === 0) {
    return <h1>No patients</h1>
  }

  return (
    <div>{patients.map(patient => {
      return <PatientListItem {...patient.attributes} />
    })}</div>
  )
}

export default PatientList
