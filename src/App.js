import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from './CartContext';
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage"; // This will be used for product details
import Checkout from "./pages/Checkout";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductList from './components/ProductList'; // Import ProductList
import OrderHistory from './components/OrderHistory';
import ProductDetails from "./pages/ProductDetails"; // Import the ProductDetails component

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <h1>My E-Commerce App</h1>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} /> {/* Product details route */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/order-history"
              element={
                <ProtectedRoute>
                  <OrderHistory />
                </ProtectedRoute>
              }
            />

            {/* Redirect for any invalid route */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
