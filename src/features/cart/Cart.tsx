//Styles
import styles from "./Cart.module.css";

import Product from "../../components/productCard/productInterface";
import CartItem from "../cartItem/CartItem";

interface CartProps {
  cartItems: Product[]; // Assuming cartItems is an array of numbers, change as needed
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {
  return (
    <>
      <div className={styles["container"]}>
        {cartItems.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}
      </div>
      {cartItems.length <= 0 ? (
        <p>You dont have items yet</p>
      ) : (
        <button>Proceed to payment</button>
      )}
    </>
  );
};

export default Cart;
