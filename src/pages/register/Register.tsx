//Styles
import styles from "./Register.module.css";
//React imports
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//Firebase imports
import { auth } from "../../firebase/firebase";
import { db } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  /**
   * Handles form submisson
   * Registers the user using Firebase authentication
   *
   * @param event
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setDoc(doc(db, "users", userCredential.user.uid), {
          favourites: [],
          email: userCredential.user.email,
          id: userCredential.user.uid,
        });

        navigate("/login");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Register
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
            Already have an account? <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
