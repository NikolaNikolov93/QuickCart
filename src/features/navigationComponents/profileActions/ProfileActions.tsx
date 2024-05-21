import styles from "./ProfileActions.module.css";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
const ProfileActions = () => {
  return (
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
  );
};

export default ProfileActions;
