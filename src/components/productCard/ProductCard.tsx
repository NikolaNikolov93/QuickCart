//Styles
import styles from "./ProductCard.module.css";
//React imports
import { Link, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
//Redux imports
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
//Firebase imports
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import {
  removeFromFavourites,
  saveToFavouirtes,
} from "../../state/favourites/favouritesSlice";
import { addToShoopingCart } from "../../state/shoppingCart/shoppingCartSlice";
import Product from "./productInterface";

//ProductCardProps
interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  //Redux State selectors
  const favs: number[] = useSelector(
    (state: RootState) => state.favourtes.favourites
  );
  const user = useSelector((state: RootState) => state.user.user);
  //Select URL params
  const { products } = useParams();
  //React States
  const [selectedImage, setSelectedImage] = useState("");
  const [like, setLike] = useState(false);
  //Redux dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    if (favs.length <= 0) {
      setLike(false);
    } else if (favs.includes(product.id)) {
      setLike(true);
    }
  }, [favs]);

  /**
   *
   * Handles like button click
   * @param id number --> item id
   *
   */
  const handleLikeClick = async (id: number) => {
    //Reference for the current user document in the Firestore
    const userRef = doc(db, "users", user.id);
    //Chekcks if the item id is included in the user's favoutires and removes it if it does
    if (favs.includes(id)) {
      //Sets the Like flag to True to render the proper Like button style

      setLike(false);
      //Removed from Firestore
      await updateDoc(userRef, {
        favourites: arrayRemove(id),
      });
      //Removed from Redux Store
      dispatch(removeFromFavourites(id));
    } else {
      //If the item is not in favourites its adds it to it
      //Sets the Like flag to True to render the proper Like button style
      setLike(true);
      //Added to Firestore
      await updateDoc(userRef, {
        favourites: arrayUnion(id),
      });
      //Added to redux state
      dispatch(saveToFavouirtes(id));
    }
  };
  /**
   * Handles adding the item to the cart
   *
   */
  const handleAddToCart = () => {
    dispatch(addToShoopingCart(product));
  };

  /**
   * Return Product card Component by using useMemmo
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
        {user.id != "" ? (
          <>
            <button
              onClick={() => {
                handleLikeClick(product.id);
              }}
              className={styles["add-to-favourites-btn"]}
            >
              {like === true ? <IoMdHeart /> : <IoMdHeartEmpty />}
            </button>
            <button
              className={styles["add-to-cart-button"]}
              onClick={() => {
                handleAddToCart();
              }}
            >
              Add to cart
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    );
  }, [selectedImage, favs, like, user]);

  return productCard;
};

export default ProductCard;
