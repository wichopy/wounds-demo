import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: #8ed8e2;
  border-bottom: 1px solid black;

  &:hover {
    cursor: pointer;
    background-color: #9ed9e2;
  }

  img {
    height: 20px;
  }
`
const WoundListItem = ({ wound }) => {
  const woundAttributes = wound.attributes
  return (
    <StyledDiv>
      <div>Type: {woundAttributes.type}</div>
      <div>Body Location: {woundAttributes.bodyLocation}</div>
      <div>In house acquired: {woundAttributes.inHouseAcquired ? 'Yes' : 'No'}</div>
      <div>Resolved: {woundAttributes.resolved ? 'Yes' : 'No'}</div>
      <button style={{ float: 'right'}}>Show wound image</button>
      <img src={woundAttributes.imageUrl} alt={'Wound image for wound '+wound.id}/>
    </StyledDiv>
  )
}

export default WoundListItem
