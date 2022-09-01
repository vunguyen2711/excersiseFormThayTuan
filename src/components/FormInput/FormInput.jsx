import React from "react";
import { Form, Button, Input, Checkbox, Typography } from "antd";
import * as S from "./style";

const { Title } = Typography;

const FormInput = ({ handleSubmitProducts }) => {
  const [formAddProducts] = Form.useForm();
  const resetFormInput = () => {
    formAddProducts.resetFields();
  };
  return (
    <S.FormContainer>
      <Title level={3}>Điền Sản Phẩm Vào Đây</Title>
      <Form
        form={formAddProducts}
        name="form"
        onFinish={(values) => {
          handleSubmitProducts(values);
          resetFormInput();
        }}
      >
        <Form.Item
          label="Tên"
          name="nameproduct"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Giá"
          name="priceproduct"
          rules={[{ required: true, message: "Please input your price!" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item name="isNew" valuePropName="checked">
          <Checkbox checked>Sản phẩm mới</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" block>
            Thêm
          </Button>
        </Form.Item>
      </Form>
    </S.FormContainer>
  );
};

export default FormInput;
