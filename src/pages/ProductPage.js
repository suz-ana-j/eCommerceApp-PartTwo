import React from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  return <h2>Product Page - Product ID: {id}</h2>;
}

export default ProductPage;
