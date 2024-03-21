export function getProducts() {
  const url = "https://dummyjson.com/products/";
  return fetch(url).then((response) => response.json());
}

export function getCategories() {
  const url = "https://dummyjson.com/products/categories";
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Error ${response.status}`);
  });
}

export function fetchProductsByCategory(category) {
  const url = `https://dummyjson.com/products/category/${category}`;
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Error ${response.status}`);
  });
}

export function searchProducts(query) {
  const url = `https://dummyjson.com/products/search?q=${query}`;
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Error ${response.status}`);
  });
}
