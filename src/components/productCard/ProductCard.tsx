import { Link, useParams } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { useMemo, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductCard = ({ product }: any) => {
  const [selectedImage, setSelectedImage] = useState("");

  const { products } = useParams();

  /**
   * Return Product card Component
   *
   */

  const productCard = useMemo(() => {
    return (
      <div className={styles["card-container"]}>
        <Link
          to={`/categories/${products}/${product.id}`}
          key={product.id}
          className={styles["product-card"]}
        >
          <div className={styles["image-container"]} key={product.id}>
            <img
              src={selectedImage ? selectedImage : `${product.thumbnail}`}
              alt=""
            />
          </div>
          <p>{product.title}</p>
          <p>{product.brand}</p>
          <p>{product.price}$</p>
          <div className={styles["hover-info"]}>
            {product.images.map((image: string) => (
              <img
                onMouseEnter={() => {
                  setSelectedImage(image);
                }}
                onMouseLeave={() => {
                  setSelectedImage("");
                }}
                key={image}
                src={image}
                alt=""
              />
            ))}
          </div>
        </Link>
        <button
          onClick={() => {
            console.log("liked");
          }}
          className={styles["add-to-favourites-btn"]}
        >
          <IoMdHeartEmpty />
        </button>
      </div>
    );
  }, [selectedImage]);

  return productCard;
};

export default ProductCard;
