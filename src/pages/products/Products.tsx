import styles from "./Products.module.css";

import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SingleProduct from "../singleProduct/SingleProduct";

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const { products } = useParams();

  let toggleModal = (product: object) => {
    setModalContent(product);
    setModal(true);
  };

  function closeModal() {
    console.log("closed");

    setModal(false);
  }
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
      <Link
        to={`/categories/${products}/${product.id}`}
        key={product.id}
        className={styles["product-card"]}
        onClick={(event) => {
          event.preventDefault();
          toggleModal(product);
        }}
      >
        <div className={styles["image-container"]} key={product.id}>
          <img src={`${product.thumbnail}`} alt="" />
        </div>
        <p>{product.title}</p>
        <p>{product.brand}</p>
        <p>{product.price}$</p>
      </Link>
    ));
  }, [productsList]);

  return (
    <>
      <div className={styles["products-container"]}>{productPage}</div>
      {modal && (
        <SingleProduct
          modalContent={modalContent}
          closeModalAction={() => {
            closeModal();
          }}
        />
      )}
    </>
  );
};

export default Products;
