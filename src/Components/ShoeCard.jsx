import React from "react";
import styled from "styled-components";
const ShoeCard = ({data}) => {
 // let shoeId = "";
  return (
    <FilterWrapper  data-cy={`shoe-card-wrapper-${data.id}`}>
      <FilterdWrapper>
        <img
          data-cy="shoe-card-image"
          alt="shoe"
          src={data.image}
          width="100%"
          height="100%"
        />
      </FilterdWrapper>
      <div style={{ textAlign: "center" }}>
        <div data-cy="shoe-name">
          {data.name}
        </div>
        <div data-cy="shoe-category">{data.category}</div>
      </div>
    </FilterWrapper>
  );
};

export default ShoeCard;


const FilterWrapper=styled.div`
border:2px solid black;
display:block;
width:100%;       
 height:400px;
 border-radius:5px;
`;
const FilterdWrapper=styled.div`
display:flex;
height:80%;
flex-direction:column;
justifyContent:center;
`