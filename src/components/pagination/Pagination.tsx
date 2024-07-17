import styles from "./Pagination.module.css";

interface PaginationProps {
  totalProducts: number;
  productsPerPage: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalProducts,
  productsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (
    let index = 1;
    index <= Math.ceil(totalProducts / productsPerPage);
    index++
  ) {
    pages.push(index);
  }
  return (
    <div className={styles["pagination-container"]}>
      {pages.map((page, index) => {
        return (
          <button
            className={`${styles["page-button"]} ${
              page == currentPage ? styles["active"] : ""
            }`}
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
