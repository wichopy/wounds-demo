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
const WoundListItem = ({ wound, resolveWound }) => {
  const { type, bodyLocation, inHouseAcquired, resolved, imageUrl } = wound.attributes
  return (
    <StyledDiv>
      <div>Type: {type}</div>
      <div>Body Location: {bodyLocation}</div>
      <div>In house acquired: {inHouseAcquired ? 'Yes' : 'No'}</div>
      <div>Resolved: {resolved ? 'Yes' : 'No'}</div>
      <button style={{ float: 'right'}}>Show wound image</button>
      {!!!resolved ? <button onClick={() => resolveWound(wound)}>Resolve Wound</button> : null }
      <img src={imageUrl} alt={'Wound image for wound '+wound.id}/>
    </StyledDiv>
  )
}

export default WoundListItem
