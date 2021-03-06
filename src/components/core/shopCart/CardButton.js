import styled from "@emotion/styled";
import React from "react";
import { useSelector } from "react-redux";

export default function CardButton() {
  const cartItems = useSelector(state => state.shopCart.cartItems);

  return (
    <StyledCartButton>
      <img
        src="https://cdn0.iconfinder.com/data/icons/minimal-set-seven/32/minimal-49-512.png"
        width="30"
        alt="imagecart"
      />
      <CountItemsCart> {cartItems.length}</CountItemsCart>
    </StyledCartButton>
  );
}

const StyledCartButton = styled.div`
  cursor: pointer;
  position: relative;
`;

const CountItemsCart = styled.div`
  position: absolute;
  top: 12px;
  right: -8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: gray;
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 50%;
  color: white;
`;
