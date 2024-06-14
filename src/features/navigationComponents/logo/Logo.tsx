//Styles
import styles from "./Logo.module.css";
//React Imports
import { Link } from "react-router-dom";

/**
 *
 * @returns React functional Component
 */
const Logo = () => {
  return (
    <Link to="/" className={styles["logo"]}>
      <img src="/images/QUICKCART_LOGO.png" alt="" />
    </Link>
  );
};

export default Logo;
