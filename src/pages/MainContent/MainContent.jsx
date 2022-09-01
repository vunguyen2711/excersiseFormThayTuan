import React from "react";
import FormInput from "../../components/FormInput/FormInput";
import CardItemContainer from "../../components/CardItemContainer/CardItemContainer";
import { Space } from "antd";
import * as S from "./style";

const MainContent = ({
  products,
  setProducts,
  handleDelete,
  handleSubmitProducts,
  handleUpdateProduct,
}) => {
  return (
    <S.MainContent>
      <S.ContentTop>
        <FormInput
          setProducts={setProducts}
          handleSubmitProducts={handleSubmitProducts}
        />
      </S.ContentTop>
      <S.ContentBottom>
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          {products.map((product, index) => (
            <CardItemContainer
              key={product.id}
              handleDelete={handleDelete}
              product={product}
              handleUpdateProduct={handleUpdateProduct}
            />
          ))}
        </Space>
      </S.ContentBottom>
    </S.MainContent>
  );
};

export default MainContent;
