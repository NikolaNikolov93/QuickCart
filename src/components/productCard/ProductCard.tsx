import { Link, useParams } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { useEffect, useMemo, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { saveToFavouirtes } from "../../state/favourites/favouritesSlice";

const ProductCard = ({ product, isLiked }: any) => {
  const [selectedImage, setSelectedImage] = useState("");
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user.user);

  const { products } = useParams();

  const handleLikeClick = async (id) => {
    const userRef = doc(db, "users", user.id);

    // Atomically add a new region to the "regions" array field.
    await updateDoc(userRef, {
      favourites: arrayUnion(id),
    });
    dispatch(saveToFavouirtes(id));
  };

  /**
   * Return Product card Component
   *
   */

  const productCard = useMemo(() => {
    return (
      <div data-id={product.id} className={styles["card-container"]}>
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
            handleLikeClick(product.id);
          }}
          className={styles["add-to-favourites-btn"]}
        >
          {isLiked === "yes" ? <IoMdHeart /> : <IoMdHeartEmpty />}
        </button>
      </div>
    );
  }, [selectedImage]);

  return productCard;
};

export default ProductCard;
