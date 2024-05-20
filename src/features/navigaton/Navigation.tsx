import styles from "./Navtigation.module.css";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";

const Navigation = () => {
  return (
    <nav className={styles["navigation"]}>
      <a href="" className={styles["logo"]}>
        <img src="/images/QUICKCART_LOGO.png" alt="" />
      </a>
      <ul className={styles["nav-links"]}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
      </ul>
      <ul className={styles["profile"]}>
        <li>
          <a href="">Profile</a>
        </li>
        <li>
          <a href="">
            <CiHeart />
          </a>
        </li>
        <li>
          <a href="">
            <LiaShoppingBagSolid />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
