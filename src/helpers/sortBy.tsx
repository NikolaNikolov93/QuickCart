interface Product {}

export default function sortBy(criteria: string, products: Product[]) {
  switch (criteria) {
    case "price-high-low":
      products.sort((a, b) => b.price - a.price);

      break;
    case "price-low-high":
      products.sort((a, b) => a.price - b.price);

      break;
    case "default":
      return products;

    default:
      break;
  }
  return products;
}
