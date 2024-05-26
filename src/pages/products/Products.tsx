import styles from "./Products.module.css";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { products } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${products}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();

        setProductsList(result.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [products]);

  const productPage = useMemo(() => {
    return productsList.map((product: any) => (
      <ProductCard key={product.id} product={product} />
    ));
  }, [productsList]);

  return (
    <>
      <div className={styles["products-container"]}>{productPage}</div>
    </>
  );
};

export default Products;
