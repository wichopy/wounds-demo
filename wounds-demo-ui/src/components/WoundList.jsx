import React from 'react'
import WoundListItem from './WoundListItem'

const WoundList = ({ wounds }) => {
  return <div>
    {wounds.length > 0 && <h3>Wounds</h3>}

    {wounds && wounds.map((wound, i) => {
      return <WoundListItem key={wound.id + i} wound={wound} />
    })}
  </div>
}

export default WoundList
