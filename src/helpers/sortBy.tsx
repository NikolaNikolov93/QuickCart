export default function sortBy(criteria: string) {
  if (criteria === "default") {
    return;
  } else {
    let [sortby, order] = criteria.split("-");

    return `?sortBy=${sortby}&order=${order}`;
  }
}
