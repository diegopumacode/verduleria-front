import styled from "@emotion/styled";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterItemProduct } from "../../../features/products/ProductSlice";

export default function FilterProducts() {
  const categories = useSelector((state) => state.products.categories);
  const categorySelect = useSelector((state) => state.products.categorySelect);
  const dispatch = useDispatch();
  const filterItem = (item) => {
      console.log(item)
      dispatch(filterItemProduct({type:item}))
  };

  return (
    <StyledCats>
      <div
        className={`option ${categorySelect === "todos" && "selected"}`}
        onClick={() => {
          filterItem("todos");
        }}
      >
        TODOS
      </div>
      {categories.map((cat) => (
        <div
          key={cat}
          className={`option ${categorySelect === cat && "selected"}`}
          onClick={() => {
            filterItem(cat);
          }}
        >
          {cat.toUpperCase()}
        </div>
      ))}
    </StyledCats>
  );
}

const StyledCats = styled.div`
  display: flex;
  gap: 20px;

  .selected {
    background-color: orange;
    color: white;
  }
  .option {
    padding: 5px 20px;
    border: 3px solid orange;
    cursor: pointer;

    &:hover {
      background-color: orange;
      color: white;
    }
  }
`;
