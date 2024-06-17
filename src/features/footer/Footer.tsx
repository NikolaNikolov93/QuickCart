//Styles
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles["container"]}>
      <div className={styles["footer"]}>
        <div className={styles["grouped-links"]}>
          <h3>Information</h3>
          <ul>
            <li>FAQ</li>
            <li>Contacts</li>
            <li>For us</li>
            <li>Information about cookies</li>
          </ul>
        </div>
        <div className={styles["grouped-links"]}>
          <h3>Orders</h3>
          <ul>
            <li>Payment methods</li>
            <li>Delivery methods</li>
            <li>Waranty information</li>
            <li>Return policies</li>
          </ul>
        </div>
        <div className={styles["grouped-links"]}>
          <h3>Social Media</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>YouTube</li>
            <li>Pinterest</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
