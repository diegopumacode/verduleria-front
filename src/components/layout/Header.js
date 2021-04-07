import styled from "@emotion/styled";
import React from "react";

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogo>La fruteria de don pepe</StyledLogo>
      <StyledActions>Boton de carrito</StyledActions>
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
const StyledLogo = styled.h1``;

const StyledActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
