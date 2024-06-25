//Styles
import styles from "./SingleProduct.module.css";
//React imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Prodcut interface
import Product from "../../components/productCard/productInterface";

/**
 *
 * @returns React functional component
 */
const SingleProduct = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  /**
   *
   * Fetches single product and displays single product card
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();

        setProduct(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //If product is null returns UI
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <section className={styles["product-container"]}>
      <div className={`${styles["product-info"]} ${styles["flex-item"]}`}>
        <img src={`${product.thumbnail}`} alt="" />
        <h2>{product.title}</h2>
        <h3>{product.price}</h3>
      </div>
      <div className={`${styles["product-actions"]} ${styles["flex-item"]}`}>
        <h1>buy</h1>
        <h1>add to fav</h1>
      </div>
    </section>
  );
};

export default SingleProduct;
