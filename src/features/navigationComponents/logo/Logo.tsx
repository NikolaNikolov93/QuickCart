import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className={styles["logo"]}>
      <img src="/images/QUICKCART_LOGO.png" alt="" />
    </Link>
  );
};

export default Logo;
