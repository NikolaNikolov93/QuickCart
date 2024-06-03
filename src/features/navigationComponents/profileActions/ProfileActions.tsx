import styles from "./ProfileActions.module.css";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { MdOutlinePerson } from "react-icons/md";

const ProfileActions = () => {
  return (
    <>
      <ul className={styles["profile"]}>
        <li className={styles["profile-icon"]}>
          <a href="">
            <MdOutlinePerson />
          </a>
          <ul className={styles["profile-actions"]}>
            <li>Login</li>
            <li>Logout</li>
            <li>Register</li>
          </ul>
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
    </>
  );
};

export default ProfileActions;
