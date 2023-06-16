import { RoleEnums } from "../enums/role.enums";
import BrandManager from "../page/auth/admin/brand-manager";
import CategoryManager from "../page/auth/admin/category-manager";
import OrderManager from "../page/auth/admin/order-manager";
import ProductManager from "../page/auth/admin/product-manager";
import SizeManager from "../page/auth/admin/size-manager";
import UserManager from "../page/auth/admin/user-manager";

export const adminRoutes = [
  {
    key: "admin-product",
    path: "/admin/product",
    element: <ProductManager />,
    protected: true,
    roles: [RoleEnums.Admin],
    exact: true,
  },
  {
    key: "admin",
    path: "/admin/category",
    element: <CategoryManager />,
    protected: true,
    roles: [RoleEnums.Admin],
    exact: true,
  },
  {
    key: "admin-user",
    path: "/admin/user",
    element: <UserManager />,
    protected: true,
    roles: [RoleEnums.Admin],
    exact: true,
  },
  {
    key: "admin-brand",
    path: "/admin/brand",
    element: <BrandManager />,
    protected: true,
    roles: [RoleEnums.Admin],
    exact: true,
  },
  {
    key: "admin-size",
    path: "/admin/size",
    element: <SizeManager />,
    protected: true,
    roles: [RoleEnums.Admin],
    exact: true,
  },
  {
    key: "admin-order",
    path: "/admin/order",
    element: <OrderManager />,
    protected: true,
    roles: [RoleEnums.Admin],
    exact: true,
  },
];
