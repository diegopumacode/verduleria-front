import styled from "@emotion/styled";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import ProductCart from "../components/core/shopCart/ProductCart";
import Button from "../components/UI/Button";
import { fetchCreateOrden } from "../features/shopCart/ShopCartSlice";

export default function Cart() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.shopCart.cartItems);
  const status = useSelector((state) => state.shopCart.status);
  const total = products.reduce((acc, { total }) => total + acc, 0);

  const checkout = () => {
    console.log("cjeckout");
    console.log(products);
    dispatch(fetchCreateOrden({ orden: products }));
  };
  return (
    <>
      <Link to="/home">
        <StyledLink>Seguir comprando</StyledLink>
      </Link>
      <br />
      <br />
      {products.length === 0 ? (
        <Link to="/">Carrito Vacio, Sigue comprando</Link>
      ) : (
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

          {status === "loading" ? (
            <h4>.....Espere, se esta realizando la compra</h4>
          ) : (
            <Button onClick={checkout}>
              {status === "loading" ? "Cargando" : "Comprar"}
            </Button>
          )}
        </>
      )}
    </>
  );
}

const StyledLink = styled.span`
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: orange;
  }
`;

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
  margin-top: 50px;
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
