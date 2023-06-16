import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ pathname, roles, children }) {
  const {
    user,
    roles: userRoles,
    isAuthenticated,
  } = useSelector((state) => state.auth);

  if (!isAuthenticated && !localStorage.getItem("accessToken")) {
    return <Navigate to={`/login?backUrl=${pathname}`} replace />;
  }

  if (roles?.length > 0) {
    const isAccept = roles.filter(
      (f) => userRoles.findIndex((x) => x === f) !== -1
    );
    if (!isAccept.length) {
      return <Navigate to={"/"} replace />;
    }
  }

  return <>{children}</>;
}

export default ProtectedRoute;
