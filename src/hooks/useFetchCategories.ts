import { useEffect, useState } from "react";

export default function useFetchCategories() {
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

  return categories;
}
