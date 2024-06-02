export default function sortBy(criteria: string) {
  let sorter = "";
  switch (criteria) {
    case "price-high-low":
      sorter = "?sortBy=price&order=desc";
      break;
    case "price-low-high":
      sorter = "?sortBy=price&order=asc";
      break;
    case "default":
      return;

    default:
      sorter = "";
      break;
  }
  return sorter;
}
