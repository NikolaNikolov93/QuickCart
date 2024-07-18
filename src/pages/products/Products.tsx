//Styles
import styles from "./Products.module.css";

//Helper function
import sortBy from "../../helpers/sortBy";

//Components imports
import ProductCard from "../../components/productCard/ProductCard";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";

//Product interface import
import Product from "../../components/productCard/productInterface";

//Custom hooks
import useFetchProducts from "../../hooks/useFetchProducts";
import { useEffect, useState } from "react";
import Pagination from "../../components/pagination/Pagination";

const Products = () => {
  /**
   * Fetch products with custom hook
   */

  const { productsList, loading, setSortingCriteria } = useFetchProducts();
  /**
   * Pagination
   */
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProductsOnPage = productsList.slice(
    firstProductIndex,
    lastProductIndex
  );

  /**
   * Handle sort
   *
   * @param criteria
   */

  const handleSort = (criteria: string) => {
    let sort = sortBy(criteria);
    setSortingCriteria(sort);
  };
  useEffect(() => {
    // Reset currentPage to 1 whenever productsList changes
    setCurrentPage(1);
  }, [productsList]);

  return (
    <>
      <div className={styles["sort-container"]}>
        <label htmlFor="sort" className={styles["sort-label"]}>
          Sort by:
        </label>
        <select
          className={styles["sort"]}
          name="sort"
          onChange={(e) => {
            handleSort(e.target.value);
          }}
        >
          <option value="default">Choose sorting option..</option>
          <option value="price-asc">Price (Low-High)</option>
          <option value="price-desc">Price (High-Low)</option>
          <option value="title-asc">Name (A-Z)</option>
          <option value="title-desc">Name (Z-A)</option>
        </select>
      </div>
      <div className={styles["products-container"]}>
        {loading ? (
          <LoadingSpinner />
        ) : (
          currentProductsOnPage.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
      <Pagination
        totalProducts={productsList.length}
        productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default Products;
