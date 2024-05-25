import { useEffect } from "react";
import styles from "./SingleProduct.module.css";

//Typescript interface for the Component
interface SingleProductProps {
  modalContent: {
    title: string;
    price: number;
    thumbnail: string;
  };
  closeModalAction: () => void;
}

/**
 *
 * modalContent Holds the product object
 * closeModal is callback fucntion that clsoes the modal
 * @param param0
 * @returns
 */

const SingleProduct: React.FC<SingleProductProps> = ({
  modalContent,
  closeModalAction,
}) => {
  useEffect(() => {
    //Adds class to the body if the modal is active to stop the scrolling
    document.body.classList.add("active-modal");
    /**
     *
     * Closes the modal on Escape button click
     * @param event
     */
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModalAction();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      /**
       *
       *Cleanup funtion that removes the class from the body
       and removes the even listener for Escape key
       *
       */

      document.body.classList.remove("active-modal");
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className={styles["modal"]}>
      <div
        onClick={() => {
          closeModalAction();
        }}
        className={styles["overlay"]}
      >
        <div
          onClick={(event) => {
            event.stopPropagation();
          }}
          className={styles["modal-content"]}
        >
          <h1>{`Item: ${modalContent.title}`}</h1>
          <h1>{`Price: ${modalContent.price}`}</h1>
          <img src={`${modalContent.thumbnail}`} alt="" />
          <button
            onClick={() => {
              closeModalAction();
            }}
            className={styles["close-modal"]}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
