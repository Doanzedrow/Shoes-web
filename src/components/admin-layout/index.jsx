import React from "react";
import AdminSideBar from "../admin-sidebar";

function AdminLayout({ children }) {
  return (
    <div>
      <AdminSideBar />
      <div className="admin-main">{children}</div>
    </div>
  );
}

export default AdminLayout;
