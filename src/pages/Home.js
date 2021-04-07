import styled from "@emotion/styled";
import React from "react";
import CardProduct from "./../components/core/products/CardProduct"

const products = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Home() {
  return (
    <>
      <StyledProducts>
        {products.map((product) => (
          <CardProduct />
        ))}
      </StyledProducts>
    </>
  );
}

const StyledProducts = styled.div`
  width: 100%;
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
`;
