import styles from "./Products.module.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import sortBy from "../../helpers/sortBy";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { products } = useParams();
  const [sortingCriteria, setSortingCriteria] = useState("");
  const baseURL = `https://dummyjson.com/products/category/${products}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = sortingCriteria
          ? await fetch(baseURL + sortingCriteria)
          : await fetch(baseURL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();

        setProductsList(result.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [products, sortingCriteria]);

  /**
   * Handle sort
   *
   * @param criteria
   */
  const handleSort = (criteria: string) => {
    let sort = sortBy(criteria);
    setSortingCriteria(sort);
  };

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
          productsList.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </>
  );
};

export default Products;
