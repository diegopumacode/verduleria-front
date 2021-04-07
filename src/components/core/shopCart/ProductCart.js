import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../UI/Button";
import {
  addCount,
  resCount,
  removeItem,
} from "./../../../features/shopCart/ShopCartSlice";
export default function ProductCart({ product }) {
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addCount({ id: product.id }));
  };

  const rest = () => {
    dispatch(resCount({ id: product.id }));
  };

  const removeProduct = () => {
    dispatch(removeItem({ id: product.id }));
  };

  return (
    <tr>
      <td>
        <img src={product.image} width="150" />
      </td>
      <td>{product.name}</td>
      <td>S./{product.price}</td>
      <td>{product.count}</td>
      <td>S./{product.total}</td>
      <td>
        <Button onClick={removeProduct}>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/3221/3221897.svg?token=exp=1617829034~hmac=d279a9d4938b0bbeef9d425ad5e2c913"
            width="20"
          />
        </Button>
        <Button onClick={add}>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/1828/1828817.svg?token=exp=1617828957~hmac=03a641b538fd4d44afc176b8cfc3a791"
            width="20"
          />
        </Button>
        <Button onClick={rest}>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/148/148765.svg?token=exp=1617828986~hmac=803f6e1568fbc0a4babf9d547c41743a"
            width="20"
          />
        </Button>
      </td>
    </tr>
  );
}
