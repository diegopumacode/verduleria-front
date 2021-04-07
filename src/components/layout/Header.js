import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import CardButton from "../core/shopCart/CardButton";

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogo>Fruti</StyledLogo>
      <StyledActions>
        <Link to="/cart">
          <CardButton />
        </Link>
      </StyledActions>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
`;
const StyledLogo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  color: gray;
`;

const StyledActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
