import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  float: left;
  position: absolute;
  top: 10px;
  left: 10px;
  transform: scale(2);
  background-color: black;
  color: white;
`
const BackButton = (props) => <StyledButton onClick={() => {
  props.onClick()
}}>{'<< Back'}</StyledButton>

export default BackButton
