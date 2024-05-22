import { useEffect, useMemo, useState } from "react";
import styles from "./CategoriesDropDown.module.css";
import { Link } from "react-router-dom";
const CategoriesDropDown = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();

        setCategories(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const categoreisLIst = useMemo(() => {
    return categories.map((category, index) => (
      <li key={index}>
        <Link to={`/categories/${category}`}>{category}</Link>
      </li>
    ));
  }, [categories]);

  return (
    <div className={styles["dropdown"]}>
      <ul>{categoreisLIst}</ul>
    </div>
  );
};

export default CategoriesDropDown;
