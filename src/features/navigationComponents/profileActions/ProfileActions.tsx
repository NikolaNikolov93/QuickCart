import styles from "./ProfileActions.module.css";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { MdOutlinePerson } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { removeUser } from "../../../state/user/userSlice";

const ProfileActions = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  return (
    <>
      <ul className={styles["profile"]}>
        {user != null ? (
          <li>
            <span>Hello, {user.email}</span>
          </li>
        ) : (
          <></>
        )}

        <li className={styles["profile-icon"]}>
          <Link to="">
            <MdOutlinePerson />
          </Link>
          <ul className={styles["profile-actions"]}>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>

            <li>
              <Link
                onClick={() => {
                  dispatch(removeUser());
                }}
                to="#"
              >
                Logout
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="">
            <CiHeart />
          </Link>
        </li>
        <li>
          <Link to="">
            <LiaShoppingBagSolid />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default ProfileActions;
