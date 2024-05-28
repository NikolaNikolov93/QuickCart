import styles from "./Products.module.css";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import sortBy from "../../helpers/sortBy";

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [sortedList, setSortedList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { products } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${products}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();

        setProductsList(result.products);
        setSortedList(result.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [products]);

  const handleSort = (criteria) => {
    const sorted = sortBy(criteria, [...productsList]);
    setSortedList(sorted);
  };
  return (
    <>
      <div className={styles["sort-container"]}>
        <label htmlFor="sort" className="sort-label">
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
          <option value="price-high-low">Price (High-Low)</option>
          <option value="price-low-high">Price (Low-High)</option>
        </select>
      </div>
      <div className={styles["products-container"]}>
        {sortedList.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
