import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

/**
 * ProtectedRoute Component
 * 
 * Wraps routes that require authentication. If user is not authenticated,
 * redirects to login page while saving the attempted location.
 * 
 * Usage:
 * <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
 */
const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  // TODO: Replace this with your actual authentication check
  // This could be checking for a token in localStorage, a context, or a Redux state
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };

  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
