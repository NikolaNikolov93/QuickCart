import styles from "./LoadingSpinner.module.css";
/**
 * Return LoadingSpinner component that is used untill the fetched data is ready
 *
 * @returns
 */
const LoadingSpinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
