
// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// import Loader from "../layout/Loader/Loader";

// const ProtectedRoute = ({ isAdmin, component: Component }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);

//   if (loading) {
//     return <Loader/>; 
//   }

//   if (isAuthenticated === false) {
//     return <Navigate to="/login" />;
//   }

//   if (isAdmin && user.role !== "admin") {
//     return <Navigate to="/login" />;
//   }

  
//   return <Component />;
// };

// export default ProtectedRoute;




import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../layout/Loader/Loader";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (loading === true) {
    return <Loader />;
  }

  return (
    <>
      {/* Ensure that loading is false before rendering the route */}
      {loading === false && (
        <>
          {/* If not authenticated, redirect to login */}
          {isAuthenticated === false ? (
            <Navigate to="/login" />
          ) : (
            <>
              {/* If the route is for admin and the user is not an admin, redirect to login */}
              {isAdmin && user.role !== "admin" ? (
                <Navigate to="/login" />
              ) : (
                <Component {...rest} />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default ProtectedRoute;
