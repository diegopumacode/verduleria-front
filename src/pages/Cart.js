import styled from "@emotion/styled";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "../components/core/shopCart/ProductCart";

export default function Cart() {
  const products = useSelector((state) => state.shopCart.cartItems);
  const total = products.reduce((acc, { total }) => total + acc, 0);
  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <td>Imagen</td>
            <td>Nombre</td>
            <td>Precio</td>
            <td>Cantidad</td>
            <td>Total</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </tbody>
      </StyledTable>
      <StyledTotal>
        Total a pagar : <strong> S./{Number(total.toFixed(2))}</strong>
      </StyledTotal>
    </>
  );
}

const StyledTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  padding: 20px;
  font-size: 1.5rem;
`;

const StyledTable = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  tr:nth-of-type(even) {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #ddd;
  }
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4caf50;
    color: white;
  }
`;
