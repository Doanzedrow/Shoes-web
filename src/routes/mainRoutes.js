import { lazy } from "react";
import Logout from "../page/logout";
const Home = lazy(() => import("../page/home"));
const Cart = lazy(() => import("../page/cart"));
const SignIn = lazy(() => import("../page/auth/sign-in"));
const SignUp = lazy(() => import("../page/auth/sign-up"));
const ProductDetail = lazy(() => import("../page/product-detail"));
const ProductList = lazy(() => import("../page/product-list"));
const Checkout = lazy(() => import("../page/checkout"));

export const mainRoutes = [
  {
    key: "home",
    path: "/",
    element: <Home />,
    protected: false,
    roles: [],
    exact: false,
  },
  {
    key: "logout",
    path: "/logout",
    element: <Logout />,
    protected: false,
    roles: [],
    exact: false,
  },
  {
    key: "cart",
    path: "/cart",
    element: <Cart />,
    protected: true,
    roles: [],
    exact: true,
  },
  {
    key: "login",
    path: "/login",
    element: <SignIn />,
    protected: false,
    roles: [],
    exact: true,
  },
  {
    key: "register",
    path: "/register",
    element: <SignUp />,
    protected: false,
    roles: [],
    exact: true,
  },
  {
    key: "product-detail",
    path: "/product/:id",
    element: <ProductDetail />,
    protected: false,
    roles: [],
    exact: true,
  },
  {
    key: "products",
    path: "/products",
    element: <ProductList />,
    protected: false,
    roles: [],
    exact: true,
  },
  {
    key: "checkout",
    path: "/checkout",
    element: <Checkout />,
    protected: true,
    roles: [],
    exact: true,
  },
];
