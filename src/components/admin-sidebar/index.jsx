import React from "react";
import "../../assets/sass/components/admin-sidebar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/auth.slice";
function AdminSideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
    navigate("/login");
  };
  return (
    <div className="admin-sidebar">
      <ul>
        <li>
          <Link to="/admin/user">User Manager</Link>
        </li>
        <li>
          <Link to="/admin/product">Product Manager</Link>
        </li>
        <li>
          <Link to="/admin/brand">Brand Manager</Link>
        </li>
        <li>
          <Link to="/admin/size">Size Manager</Link>
        </li>
        <li>
          <Link to="/admin/order">Order Manager</Link>
        </li>
        <button className="btn btn-danger" onClick={logoutHandler}>
          Logout
        </button>
      </ul>
    </div>
  );
}

export default AdminSideBar;
