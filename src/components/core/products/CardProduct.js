import styled from "@emotion/styled";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addItemtoCart } from "../../../features/shopCart/ShopCartSlice";
import Button from "../../UI/Button";
import Card from "../../UI/Card";

export default function CardProduct({ id, name, image, description, price }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addItemtoCart({ id, name, image, price }));
    history.push("/cart");

  };

  return (
    <Card>
      <ImageProduct src={image} />
      <ContentProduct>
        <h4>{name}</h4>
        <p className="description">{description}</p>
        <p className="price">
          Precio : <span>{price} soles</span>
        </p>
        <Button
          onClick={() => {
            addItem();
          }}
        >
          Anadir al carrito
        </Button>
      </ContentProduct>
    </Card>
  );
}

const ImageProduct = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ContentProduct = styled.div`
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .description {
    font-size: 0.8rem;
  }

  .price {
    font-size: 0.9rem;
    span {
      font-weight: bold;
    }
  }
`;
