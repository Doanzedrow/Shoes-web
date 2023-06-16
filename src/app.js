import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./assets/sass/index.css";
import ScrollToHashElement from "./components/common/ScrollToHashElement";
import Footer from "./components/footer";
import Header from "./components/header";
import { routesConfig } from "./routes";
import ProtectedRoute from "./components/common/ProtectedRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./redux/auth.slice";
import { adminRoutes } from "./routes/adminRoutes";
import AdminLayout from "./components/admin-layout";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const user = localStorage.getItem("user");
    if (accessToken && user) {
      dispatch(
        authActions.verifiedAuth({
          accessToken,
          user,
        })
      );
    }
  }, [dispatch]);
  return (
    <>
      <ToastContainer position="bottom-left" />
      <ScrollToHashElement />
      <Routes>
        {routesConfig.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            element={
              <>
                <Header />
                {route.protected ? (
                  <ProtectedRoute pathname={route.path} roles={route.roles}>
                    {route.element}
                  </ProtectedRoute>
                ) : (
                  route.element
                )}
                <Footer />
              </>
            }
          />
        ))}

        {adminRoutes.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            element={
              <AdminLayout>
                <ProtectedRoute pathname={route.path} roles={route.roles}>
                  {route.element}
                </ProtectedRoute>
              </AdminLayout>
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
