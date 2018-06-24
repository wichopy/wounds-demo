import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: #8ed8e2
`
const WoundListItem = ({ wound }) => {
  const woundAttributes = wound.attributes
  return (
    <StyledDiv>
      <div>Type: {woundAttributes.type}</div>
      <div>Body Location: {woundAttributes.bodyLocation}</div>
      <div>In house acquired: {woundAttributes.inHouseAcquired}</div>
      <div>Resolved: {woundAttributes.resolved ? 'Yes' : 'No'}</div>
      <button style={{ float: 'right'}}>Show wound image</button>
      <img style={{ height: '100px' }} src={woundAttributes.imageUrl} alt={'Wound image for wound '+wound.id}/>
    </StyledDiv>
  )
}

export default WoundListItem
