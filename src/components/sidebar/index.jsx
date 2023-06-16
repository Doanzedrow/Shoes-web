import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="header-sidebar">
      <div className="sidebar-container">
        <div className="sidebar-close ">
          <i className="ti-close" />
        </div>
        <form className="ps-search searchform" id="searchform" method="get">
          <input
            className="form-cnt inputString"
            autoComplete="off"
            name="search"
            id="inputString"
            placeholder="Nhập từ cần tìm"
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </form>
        <ul className="main-menu menu">
          <li className="menu-item ">
            <Link to="/">TRANG CHỦ</Link>
          </li>
          <li className="menu-item ">
            <Link to="/#product-new">SẢN PHẨM MỚI</Link>
          </li>
          <li className="menu-item ">
            <Link to="/#product-hot">BÁN CHẠY</Link>
          </li>
          <li className="menu-item ">
            <Link to="/products">SẢN PHẨM</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
