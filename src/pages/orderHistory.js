import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get the token from local storage or context
    const token = localStorage.getItem('token');

    if (!token) {
      // Redirect to login if no token exists
      navigate('/login');
      return;
    }

    // Fetch order history
    const fetchOrderHistory = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/orders', {
          headers: {
            Authorization: `Bearer ${token}`, // Include the JWT token in headers
          },
        });
        setOrders(response.data.orders); // Assuming the response contains an 'orders' array
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load order history.');
        setLoading(false);
      }
    };

    fetchOrderHistory();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Your Order History</h2>
      {orders.length === 0 ? (
        <p>You have no past orders.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              <h3>Order #{order._id}</h3>
              <p>Status: {order.status}</p>
              <ul>
                {order.items.map((item) => (
                  <li key={item.productId._id}>
                    {item.name} - {item.quantity} x ${item.price}
                  </li>
                ))}
              </ul>
              <p>Total: ${order.total}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;

