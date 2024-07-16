import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/**
 *
 * @returns productsList
 */

export default function useFetchProducts() {
  /**
   * Set states
   */
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortingCriteria, setSortingCriteria] = useState("");
  /**
   * Url handling
   */
  const { products } = useParams();
  const baseURL = `https://dummyjson.com/products/category/${products}`;

  /**
   * Fetch data
   */
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

  return { productsList, loading, setSortingCriteria };
}
