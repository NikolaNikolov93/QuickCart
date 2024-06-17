//Styles
import styles from "./CategoriesDropDown.module.css";
//React imports
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
//Categories props interface
interface CategoriesDropDownProps {
  onCategoryClick: () => void;
}
/**
 *
 * @returns React functional component
 */
const CategoriesDropDown: React.FC<CategoriesDropDownProps> = ({
  onCategoryClick,
}) => {
  //React States
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    /**
     * Fetch Data
     *
     */
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
      }
    };
    fetchData();
  }, []);

  /**
   * Returns Categoeries List with useMemo
   */
  const categoreisLIst = useMemo(() => {
    return categories.map((category: any, index) => (
      <li key={index} onClick={onCategoryClick}>
        <Link to={`/categories/${category.slug}`}>{category.name}</Link>
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
