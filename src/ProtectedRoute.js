import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token'); // Check for the token

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} /> // If authenticated, render the protected component
        ) : (
          <Redirect to="/login" /> // If not authenticated, redirect to the login page
        )
      }
    />
  );
};

export default ProtectedRoute;
