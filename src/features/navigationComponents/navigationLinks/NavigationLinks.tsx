import { NavLink } from "react-router-dom";
import styles from "./NavigationLinks.module.css";
import CategoriesDropDown from "../categoriesDropDown/CategoriesDropDown";
import { useState } from "react";

const NavigationLinks = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <ul className={styles["nav-links"]}>
      <li
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onClick={() => setIsActive(false)}
      >
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? styles["pending"] : isActive ? styles["active"] : ""
          }
          to="/categories"
        >
          Categories
        </NavLink>
        {isActive && <CategoriesDropDown />}
      </li>

      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? styles["pending"] : isActive ? styles["active"] : ""
          }
          to="/new"
        >
          What's New
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationLinks;
