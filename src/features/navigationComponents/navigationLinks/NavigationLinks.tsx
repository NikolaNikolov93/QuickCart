//Styles
import styles from "./NavigationLinks.module.css";
//React imports
import { Link } from "react-router-dom";
//Components imports
import CategoriesDropDown from "../categoriesDropDown/CategoriesDropDown";
import { useState } from "react";

/**
 *
 * @returns React functinal component
 */
const NavigationLinks = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleCategoryClick = () => {
    setDropdownVisible(false);
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <ul className={styles["nav-links"]}>
      <li
        className={styles["categories"]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p>Categories</p>
        <div
          id="dropdown-container"
          className={`${styles["dropdown-container"]} ${
            dropdownVisible ? styles["visible"] : styles["hidden"]
          }`}
        >
          <CategoriesDropDown onCategoryClick={handleCategoryClick} />
        </div>
      </li>
      <li>
        <Link to="/new">What's New</Link>
      </li>
    </ul>
  );
};

export default NavigationLinks;
