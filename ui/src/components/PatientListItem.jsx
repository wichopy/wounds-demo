import React from "react";
import moment from "moment";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;

  & * {
    margin-left: 0.25em;
  }

  &:hover {
    background-color: #2ab7ca;
    cursor: pointer;
  }

  img {
    height: 50px;
    border-radius: 25px;
    border: 2px solid black;
  }
`;
const PatientListItem = ({
  selectPatient,
  id,
  firstName,
  lastName,
  avatarUrl,
  dateOfBirth
}) => {
  return (
    <StyledDiv onClick={() => selectPatient(id)}>
      <img
        src={avatarUrl}
        alt={"The user profile of " + firstName + " " + lastName}
      />
      <span>
        <b>NAME:</b> {lastName}, {firstName}
      </span>
      <span>
        <b>DOB:</b> {moment(dateOfBirth).format("MMM DD YYYY")}
      </span>
    </StyledDiv>
  );
};

export default PatientListItem;
