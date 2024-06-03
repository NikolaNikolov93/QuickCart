import { Link } from "react-router-dom";
import styles from "./NavigationLinks.module.css";
import CategoriesDropDown from "../categoriesDropDown/CategoriesDropDown";

const NavigationLinks = () => {
  return (
    <ul className={styles["nav-links"]}>
      <li className={styles["categories"]}>
        <p>Categories</p>
        <div id="dropdown-container" className={styles["dropdown-container"]}>
          <CategoriesDropDown />
        </div>
      </li>
      <li>
        <Link to="/new">What's New</Link>
      </li>
    </ul>
  );
};

export default NavigationLinks;
