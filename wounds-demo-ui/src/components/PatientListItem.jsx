import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #2ab7ca;
    cursor: pointer;
  }
`
const PatientListItem = ({ onClick, id, firstName, lastName, avatarUrl, dateOfBirth }) => {
  return (
    <StyledDiv onClick={() => onClick(id)}>
      <img src={avatarUrl} alt={'The user profile of '+ firstName + ' ' + lastName} style={{ height: '50px', borderRadius: '25px', border: '2px solid black'}}/>
      <span style={{ marginLeft: '8px' }}><b>NAME:</b> {lastName}, {firstName}</span>
      <span style={{ marginLeft: '8px' }}><b>DOB:</b> {moment(dateOfBirth).format('MMM DD YYYY')}</span>
    </StyledDiv>
  )
}

export default PatientListItem
