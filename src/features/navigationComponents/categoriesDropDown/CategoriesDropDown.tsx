//Styles
import styles from "./CategoriesDropDown.module.css";
//React imports
import { useMemo } from "react";
import { Link } from "react-router-dom";
//CustomHooks
import useFetchCategories from "../../../hooks/useFetchCategories";
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
  /**
   * React Custom Hook for fetching categories
   */
  const categories = useFetchCategories();

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
