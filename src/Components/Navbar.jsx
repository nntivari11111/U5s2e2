import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Navbar = () => {
  return (
    <FilterWrapper>
      <div data-cy="navbar-home-link">
        <img
          src="/Adidas_Logo.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>
        <div>
          <button
            data-cy="navbar-login-button">
            <Link to="/login">
              LOGIN
            </Link>
          </button>
        </div>
    </FilterWrapper>
  );
};

export default Navbar;

const FilterWrapper=styled.div`
display:flex;
justify-content:space-between;
margin-bottom:20px;
`;
