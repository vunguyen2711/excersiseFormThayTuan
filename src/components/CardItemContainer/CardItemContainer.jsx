import React from "react";
import { useState } from "react";
import FormUpdate from "../FormUpdate/FormUpdate";
import CardItem from "../Card/CardItem";
const CardItemContainer = ({ product, handleDelete, handleUpdateProduct }) => {
  const [isAdjustProduct, setIsAdjustProduct] = useState(false);
  return (
    <>
      {isAdjustProduct ? (
        <FormUpdate
          setIsAdjustProduct={setIsAdjustProduct}
          isAdjustProduct={isAdjustProduct}
          product={product}
          handleUpdateProduct={handleUpdateProduct}
        />
      ) : (
        <CardItem
          setIsAdjustProduct={setIsAdjustProduct}
          isAdjustProduct={isAdjustProduct}
          handleDelete={handleDelete}
          product={product}
        />
      )}
    </>
  );
};

export default CardItemContainer;
