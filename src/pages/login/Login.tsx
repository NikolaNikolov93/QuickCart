//Styles
import styles from "./Login.module.css";
//React imports
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//Firebase imports
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth } from "../../firebase/firebase";
import { db } from "../../firebase/firebase";
//Redux imports
import { useDispatch } from "react-redux";
import { saveUser } from "../../state/user/userSlice";
import { setFavourites } from "../../state/favourites/favouritesSlice";

/**
 *
 * @returns React functional component
 */
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * On Submit uses Firbease sign in to sign the user,
   * puts simple user object in the redux state and redirects to home page
   *
   * @param event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Handle form submission
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const docRef = doc(db, "users", userCredential.user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const user = docSnap.data();

          dispatch(saveUser(user));
          dispatch(setFavourites(docSnap.data().favourites));
          navigate("/");
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      })

      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className={styles["container"]}>
      <h2 className={styles.title}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles["inputGroup"]}>
          <label htmlFor="email" className={styles["label"]}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={styles["input"]}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles["inputGroup"]}>
          <label htmlFor="password" className={styles["label"]}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className={styles["input"]}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles["button"]}>
          Login
        </button>
        {errorMessage ? (
          <div className={styles["error"]}>
            <p>{errorMessage}</p>
          </div>
        ) : (
          <></>
        )}
        <div>
          <p>
            Not registered? <Link to={"/register"}>Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
