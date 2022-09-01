import React, { useState } from "react";
import { Form, Button, Space, Input, Checkbox } from "antd";
import * as S from "./style";
const FormUpdate = ({
  product,
  setIsAdjustProduct,
  isAdjustProduct,
  handleUpdateProduct,
}) => {
  let [initialValue, setInitialValues] = useState({
    id: product.id,
    nameproduct: product.nameproduct,
    priceproduct: product.priceproduct,
    isNew: product.isNew,
  });
  console.log("init", initialValue);
  const onUpdateValues = (values) => {
    const { nameproduct, priceproduct } = values;
    const updatedProductValues = {
      ...initialValue,
      nameproduct: nameproduct,
      priceproduct: priceproduct,
      isNew: initialValue.isNew,
    };
    handleUpdateProduct(updatedProductValues);
  };
  return (
    <S.FormUpdateContainer>
      <Form
        initialValues={initialValue}
        name="formupdate"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "50%",
        }}
        onFinish={(values) => {
          onUpdateValues(values);
          setIsAdjustProduct(!isAdjustProduct);
        }}
      >
        <Form.Item
          style={{ width: "100%" }}
          label="Tên sản phẩm"
          name="nameproduct"
        >
          <Input />
        </Form.Item>
        <Form.Item
          style={{ width: "100%" }}
          label="Giá sản phẩm"
          name="priceproduct"
        >
          <Input />
        </Form.Item>
        <Form.Item name="isNew">
          <Checkbox
            onChange={() =>
              setInitialValues((prevState) => {
                return {
                  ...prevState,
                  isNew: !prevState.isNew,
                };
              })
            }
            checked={initialValue.isNew}
          >
            Sản phẩm mới
          </Checkbox>
        </Form.Item>
        <Space size="middle">
          <Button htmlType="submit" type="primary">
            Lưu
          </Button>
          <Button
            onClick={() => setIsAdjustProduct(!isAdjustProduct)}
            type="danger"
          >
            Hủy
          </Button>
        </Space>
      </Form>
    </S.FormUpdateContainer>
  );
};

export default FormUpdate;
