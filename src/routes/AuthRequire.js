import React, { useEffect } from "react";
import useAuth from "../customhook/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";

function AuthRequire({ children }) {
  const { isAuthenticated, isInitialized } = useAuth();
  const location = useLocation();
  useEffect(() => {
    console.log("isauthenticated", isAuthenticated);
  }, [isAuthenticated]);

  console.log("authenticated", isAuthenticated);

  if (!isInitialized) {
    return <LoadingScreen />;
  }
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default AuthRequire;
