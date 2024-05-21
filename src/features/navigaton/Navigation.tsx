import styles from "./Navtigation.module.css";

import Logo from "../navigationComponents/logo/Logo";
import NavigationLinks from "../navigationComponents/navigationLinks/NavigationLinks";
import ProfileActions from "../navigationComponents/profileActions/ProfileActions";

const Navigation = () => {
  return (
    <section className={styles["container"]}>
      <nav className={styles["navigation"]}>
        <Logo />
        <NavigationLinks />
        <ProfileActions />
      </nav>
    </section>
  );
};

export default Navigation;
