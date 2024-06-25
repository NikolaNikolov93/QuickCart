//Styles
import { useDispatch } from "react-redux";
import Product from "../../components/productCard/productInterface";
import styles from "./CartItem.module.css";
import { removeFromShoppingCart } from "../../state/shoppingCart/shoppingCartSlice";

interface CartItemProps {
  product: Product;
}

/**
 * React functional Component
 *
 */
const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  function handleRemoveFromCart(id: number) {
    dispatch(removeFromShoppingCart(id));
  }
  return (
    <div className={styles["container"]}>
      <section className={styles["item-info"]}>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <img src={product.thumbnail} alt="" />
      </section>
      <section className={styles["item-actions"]}>
        <button
          onClick={() => {
            handleRemoveFromCart(product.id);
          }}
        >
          X
        </button>
      </section>
    </div>
  );
};

export default CartItem;
