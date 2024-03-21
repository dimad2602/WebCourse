import {
  getProducts,
  getCategories,
  fetchProductsByCategory,
  searchProducts,
} from "./requests.js";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const productsContainer = document.querySelector(".js-products");
const select = document.querySelector(".js-select");
const searchInput = document.querySelector(".js-search");

document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
  loadCategories();
});

select.addEventListener("change", () => {
  const selectedCategory = select.value;
  if (selectedCategory) {
    fetchProductsByCategory(selectedCategory)
      .then((data) => {
        renderProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching products by category:", error);
      });
  } else {
    loadProducts();
  }
});

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.trim().toLowerCase();
  if (searchText) {
    searchProducts(searchText)
      .then((data) => {
        renderProducts(data.products);
      })
      .catch((error) => {
        console.error("Error searching products:", error);
      });
  } else {
    loadProducts();
  }
});

function loadProducts() {
  getProducts()
    .then((data) => {
      renderProducts(data.products);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
}

function loadCategories() {
  getCategories()
    .then((data) => {
      data.forEach((category) => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        select.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Error fetching categories:", error);
    });
}

function renderProducts(products) {
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    const productElement = createProductElement(product);
    productsContainer.appendChild(productElement);
  });
}

function createProductElement(product) {
  const productElement = document.createElement("div");
  productElement.textContent = product.title;
  productElement.className = "product";

  const imgElement = document.createElement("img");
  imgElement.src = product.thumbnail;
  imgElement.alt = "Product Image";
  imgElement.className = "product__img";
  productElement.appendChild(imgElement);

  const productBody = document.createElement("div");
  productBody.className = "product__body";

  const priceElement = document.createElement("p");
  priceElement.textContent = formatter.format(product.price);
  priceElement.className = "product__price";
  productBody.appendChild(priceElement);

  const titleElement = document.createElement("h2");
  titleElement.textContent = product.title;
  titleElement.className = "product__title";
  productBody.appendChild(titleElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = product.description;
  descriptionElement.className = "product__descr";
  productBody.appendChild(descriptionElement);

  const brandElement = document.createElement("p");
  brandElement.textContent = `Brand: ${product.brand}`;
  brandElement.className = "product__brand";
  productBody.appendChild(brandElement);

  const categoryElement = document.createElement("p");
  categoryElement.textContent = `Category: ${product.category}`;
  categoryElement.className = "product__category";
  productBody.appendChild(categoryElement);

  const ratingElement = document.createElement("div");
  ratingElement.className = "rating product__rating";
  const svgRating = `
    <svg class="rating__ico" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  `;

  const ratingValue = document.createElement("p");
  ratingValue.textContent = product.rating;
  ratingValue.className = "rating__value";

  ratingElement.insertAdjacentHTML("beforeend", svgRating);
  ratingElement.appendChild(ratingValue);

  productBody.appendChild(ratingElement);

  productElement.appendChild(productBody);

  return productElement;
}
