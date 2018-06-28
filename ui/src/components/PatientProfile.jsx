import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 50px auto auto 50px;
  grid-template-rows: auto auto;
  background-color: #2ab7ca;
  padding: 0.4em;

  img {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    width: 100px;
    border-radius: 50px;
    border: 2px solid black;
    align-self: center;
    justify-self: center;
  }

  patient-info {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const PatientProfile = ({
  firstName,
  lastName,
  dateOfBirth,
  address,
  roomNumber,
  bedNumber,
  avatarUrl
}) => {
  return (
    <StyledDiv>
      <img src={avatarUrl} alt="patient profile avatar"/>
      <div className="patient-info">
        <div>
          <p>
            <b>Name:</b>
          </p>
          <p>
            {firstName} {lastName}
          </p>
          <p>
            <b>DOB:</b>
          </p>
          <p>{dateOfBirth}</p>
          <p>
            <b>Address:</b>
          </p>
          <p>{address}</p>
        </div>
        <div>
          <p>
            <b>Room Number:</b>
          </p>
          <p>{roomNumber}</p>
          <p>
            <b>Bed Number:</b>
          </p>
          <p>{bedNumber}</p>
        </div>
      </div>
    </StyledDiv>
  );
};

export default PatientProfile;
