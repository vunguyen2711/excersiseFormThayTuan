import { useState } from "react";
import MainContent from "./pages/MainContent/MainContent";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [products, setProducts] = useState([]);
  console.log("products", products);

  const handleSubmitProducts = (values) => {
    const { nameproduct, priceproduct, isNew } = values;
    setProducts((preState) => [
      ...preState,
      {
        id: uuidv4(),
        nameproduct,
        priceproduct,
        isNew,
      },
    ]);
  };
  const handleDelete = (id) => {
    const remainedProduct = products.filter((product) => product.id !== id);
    setProducts(remainedProduct);
  };
  const handleUpdateProduct = (updatedProductValues) => {
    const newUpdateProducts = [...products];
    const indexOfUpdatedProduct = products.findIndex(
      (product) => product.id === updatedProductValues.id
    );
    newUpdateProducts.splice(indexOfUpdatedProduct, 1, updatedProductValues);
    setProducts(newUpdateProducts);
  };
  return (
    <div className="App">
      <MainContent
        products={products}
        setProducts={setProducts}
        handleDelete={handleDelete}
        handleSubmitProducts={handleSubmitProducts}
        handleUpdateProduct={handleUpdateProduct}
      />
    </div>
  );
}

export default App;
