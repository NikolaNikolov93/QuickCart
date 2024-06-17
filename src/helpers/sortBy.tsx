/**
 *
 * @param criteria string
 * Uses the criteria string to split in tow parts.
 * 1. Sortby --> name, price, etc.
 * 2. Order --> ascending or descending
 * @returns partial URL with the sorting criteria variables, that is attached to the end of the base URL
 */
export default function sortBy(criteria: string) {
  if (criteria === "default") {
    return;
  } else {
    let [sortby, order] = criteria.split("-");

    return `?sortBy=${sortby}&order=${order}`;
  }
}
