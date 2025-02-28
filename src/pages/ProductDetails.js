// src/pages/ProductDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get the product ID from the URL

function ProductDetails() {
  const { id } = useParams(); // Fetch product ID from the URL
  const [product, setProduct] = useState(null); // To store product data
  const [loading, setLoading] = useState(true); // To show a loading state

  useEffect(() => {
    // Fetch the product details based on the ID
    fetch(`/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data); // Store product details
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  // Function to add the product to the cart
  const handleAddToCart = () => {
    // Logic for adding the product to the cart
    alert(`${product.name} added to the cart!`);
  };

  // Show loading text while fetching product data
  if (loading) return <p>Loading product details...</p>;

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
