import React from "react";
import { Card, Button, Space } from "antd";

const CardItem = ({
  product,
  handleDelete,
  setIsAdjustProduct,
  isAdjustProduct,
}) => {
  return (
    <div>
      <Card
        key={product.id}
        title={`${product.nameproduct}  ${
          product.isNew ? "[Sản Phẩm Mới]" : "[Sản phẩm cũ]"
        }`}
        size="small"
      >
        <p>Giá sản phẩm: {product.priceproduct}</p>
        <Space direction="horizontal" size="small">
          <Button danger onClick={() => handleDelete(product.id)}>
            Xóa
          </Button>
          <Button primary onClick={() => setIsAdjustProduct(!isAdjustProduct)}>
            Sửa
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default CardItem;
