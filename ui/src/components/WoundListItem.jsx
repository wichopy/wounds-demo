import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => (props.resolved ? "#8ed8e2" : "#f22720")};
  border-bottom: 1px solid black;
  &:hover {
    cursor: ${props => (props.resolved ? "default" : "pointer")};
    background-color: ${props => (props.resolved ? "#9ed9e2" : "#f8938f")};
  }

  .text {
    margin-left: 1em;
    text-align: left;
  }

  img {
    height: 20em;
  }
`;
const WoundListItem = ({ wound, resolveWound, showImage }) => {
  const {
    type,
    bodyLocation,
    inHouseAcquired,
    resolved,
    imageUrl
  } = wound.attributes;
  return (
    <StyledDiv
      resolved={resolved}
      onClick={!!!resolved && (() => resolveWound(wound))}
    >
      <div className="text">
        <p>Type: {type}</p>
        <p>Body Location: {bodyLocation}</p>
        <p>In house acquired: {inHouseAcquired ? "Yes" : "No"}</p>
        <p>Resolved: {resolved ? "Yes" : "No"}</p>
      </div>
      {showImage ? (
        <img src={imageUrl} alt={"Wound image for wound " + wound.id} />
      ) : null}
    </StyledDiv>
  );
};

export default WoundListItem;
