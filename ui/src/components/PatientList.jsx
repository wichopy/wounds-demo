import React from 'react'
import PatientListItem from '../containers/PatientListItem'

const PatientList = ({ isFetching, patients }) => {
  return (
    <div>
      {isFetching && <h1>...loading...</h1>}
      {(!isFetching && patients.length === 0) && <h1>No patients</h1>}
      {!isFetching && patients.map(patient => {
        return <PatientListItem key={patient.id} {...{...patient.attributes, id: patient.id}} />
      })}
    </div>
  )
}

export default PatientList
