import React, { useState } from "react";

const dummyProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "A modern smartphone",
    category: "electronics",
    price: 699,
    stock: 50,
  },
  {
    id: 2,
    name: "Laptop",
    description: "Powerful laptop for work",
    category: "electronics",
    price: 999,
    stock: 30,
  },
  {
    id: 3,
    name: "T-shirt",
    description: "Comfortable cotton t-shirt",
    category: "fashion",
    price: 20,
    stock: 200,
  },
  {
    id: 4,
    name: "Blender",
    description: "Kitchen blender for smoothies",
    category: "home",
    price: 45,
    stock: 100,
  },
  {
    id: 5,
    name: "Headphones",
    description: "Noise-cancelling headphones",
    category: "electronics",
    price: 150,
    stock: 40,
  },
];

function SearchComponent() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [products, setProducts] = useState(dummyProducts);

  const handleSearch = () => {
    let filteredProducts = dummyProducts;

    // Filter by query
    if (query) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name
            .toLocaleLowerCase()
            .includes(query.toLocaleLowerCase()) ||
          product.description
            .toLocaleLowerCase()
            .includes(query.toLocaleLowerCase())
      );
    }

    // Filter by category
    if (category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }

    // Filter by price range
    if (minPrice) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= parseFloat(minPrice)
      );
    }
    if (maxPrice) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= parseFloat(maxPrice)
      );
    }

    setProducts(filteredProducts);
  };
  return (
    <div>
      <h1>Products Search</h1>
      <input
        type="text"
        placeholder="Search product..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="home">Home</option>
      </select>
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {
            products.map((product) => (
                <div key={product.id}>
                    <h3>
                        {product.name}
                    </h3>
                    <p>
                        {product.description}
                    </p>
                    <p>
                        Category : {product.category}
                    </p>
                    <p>
                        price : ${product.stock}
                    </p>
                    <p>
                        Stock : {product.stock} 
                    </p>
                </div>
            ))
        }
      </div>
    </div>
  );
}

export default SearchComponent;
