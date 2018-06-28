import React from 'react'
import WoundListItem from '../containers/WoundListItem'

const WoundList = ({ wounds, selectedPatient }) => {
  return <div>
    {wounds.length > 0 && <h3>{selectedPatient.attributes.firstName}'s Wounds</h3>}

    {wounds && wounds.map((wound, i) => {
      return <WoundListItem key={wound.id + i} wound={wound} />
    })}
  </div>
}

export default WoundList
