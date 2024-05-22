import { useParams } from "react-router-dom";

const Products = () => {
  const { product } = useParams();
  return (
    <div>
      <h1>Product:{product}</h1>
    </div>
  );
};

export default Products;
