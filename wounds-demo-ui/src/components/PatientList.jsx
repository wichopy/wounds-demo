import React from 'react'
import PatientListItem from './PatientListItem'

const PatientList = (props) => {
  return (
    <div>
      {props.isFetching && <h1>...loading...</h1>}
      {(props.patients.length === 0) && <h1>No patients</h1>}
      {props.patients && props.patients.map(patient => {
        return <PatientListItem {...patient.attributes} />
      })}
    </div>
  )
}

export default PatientList
