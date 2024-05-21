import styles from "./NavigationLinks.module.css";

const NavigationLinks = () => {
  return (
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
  );
};

export default NavigationLinks;
