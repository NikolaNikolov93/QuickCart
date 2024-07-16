//Styles
import styles from "./ProfileActions.module.css";
//React-icons imports
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { MdOutlinePerson } from "react-icons/md";
//React imports
import { Link } from "react-router-dom";
//Redux imports
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { removeUser } from "../../../state/user/userSlice";
import { resetFavourites } from "../../../state/favourites/favouritesSlice";
import { resetShoppingCart } from "../../../state/shoppingCart/shoppingCartSlice";
//React imports
import { useEffect, useMemo, useState } from "react";
//Component imports
import Cart from "../../cart/Cart";

/**
 *
 * @returns React functional component
 */
const ProfileActions = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const shoppingCart = useSelector(
    (state: RootState) => state.shoppingCart.shoppingCartItems
  );
  const [isCartVisible, setIsCartVisible] = useState(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(removeUser());
    dispatch(resetFavourites());
    dispatch(resetShoppingCart());
  };
  /**
   * Show or hide the shoppingCartPanel
   *
   */
  function handaleShoppingCartClick() {
    setIsCartVisible(!isCartVisible);
  }

  /**
   * Returns JSX components that is dependant on the user and shopping cart items
   *
   */
  function handleClickOutside(e) {
    // if (e.target.className.includes("cart")) {
    //   setIsCartVisible(true);
    // } else {
    //   setIsCartVisible(false);
    // }
    console.log(e.target);
  }
  useEffect(() => {
    if (isCartVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartVisible]);

  const profileActions = useMemo(() => {
    return (
      <>
        <ul className={styles["profile"]}>
          {user.email ? (
            <li>
              <span>Hello, {user.email}</span>
            </li>
          ) : (
            <></>
          )}

          <li className={styles["profile-icon"]}>
            <Link to="">
              <MdOutlinePerson />
            </Link>
            <ul className={styles["profile-actions"]}>
              {user.id ? (
                <>
                  {" "}
                  <li>
                    <Link to="/">Profile</Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => {
                        handleLogout();
                      }}
                      to="#"
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </li>
          <li>
            <Link to="">
              <CiHeart />
            </Link>
          </li>
          <li>
            <Link
              to="/#"
              onClick={(e) => {
                e.preventDefault();
                handaleShoppingCartClick();
              }}
            >
              <div className={styles["cart-container"]}>
                <LiaShoppingBagSolid />
                {shoppingCart.length > 0 ? (
                  <p className={styles["cart-items-counter"]}>
                    {shoppingCart.length}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </Link>
          </li>
        </ul>
        <section
          className={`${styles["cart"]} ${
            isCartVisible ? styles["open"] : styles["hidden"]
          }`}
        >
          <Cart key={"carts"} cartItems={shoppingCart} />
        </section>
      </>
    );
  }, [shoppingCart, user, isCartVisible]);

  return profileActions;
};

export default ProfileActions;
