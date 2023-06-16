import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RoleEnums } from "../../enums/role.enums";
import { authActions } from "../../redux/auth.slice";
import CustomNavLink from "../common/ScrollToHashElement/CustomNavLink";
import Logo from "../logo";
import { getCart } from "../../redux/cart.slice";

function Nav() {
  const { data } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const { isAuthenticated, roles } = useSelector((state) => state.auth);
  const isAdmin = roles.includes(RoleEnums.Admin);
  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
    navigate("/login");
  };

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <nav className="navigation">
      <div className="container-nav">
        {/* Navigation-left */}
        <div className="navigation-column left">
          <Logo />
        </div>
        {/* Navigation-center */}
        <div className="navigation-column center">
          <ul className="main-menu menu">
            {!isAdmin && (
              <>
                <li className="menu-item ">
                  <CustomNavLink to="/">TRANG CHỦ</CustomNavLink>
                </li>
                <li className="menu-item ">
                  <CustomNavLink to="/#product-new">SẢN PHẨM MỚI</CustomNavLink>
                </li>
                <li className="menu-item ">
                  <CustomNavLink to="/#product-hot">BÁN CHẠY</CustomNavLink>
                </li>
                <li className="menu-item ">
                  <CustomNavLink to="/products">SẢN PHẨM</CustomNavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        {/* Navigation-right */}
        <div className="navigation-column right">
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
            <button id="btnSearch" type="button">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </form>
          {!isAdmin && (
            <div className="ps-cart" id="reloaddiv">
              <Link
                className="ps-cart-toggle"
                rel="noindex nofollow"
                to={"/cart"}
              >
                <span>
                  <i className="numberSumProduct">{data.cart_items?.length}</i>
                </span>
                <i className="fa-solid fa-cart-plus" />
              </Link>
            </div>
          )}

          <div className="menu-toggle">
            <i className="fa-solid fa-bars" />
          </div>
        </div>
        <div className="ms-3">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle btn-user"
              type="button"
              data-bs-toggle="dropdown"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-solid fa-user" />
            </button>
            <ul className="dropdown-menu">
              {!isAuthenticated && (
                <li>
                  <Link to="/login" className="dropdown-item">
                    Đăng nhập
                  </Link>
                </li>
              )}

              {isAuthenticated && (
                <>
                  <li>
                    <Link to="/profile" className="dropdown-item">
                      Trang cá nhân
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/logout"
                      className="dropdown-item"
                      onClick={logoutHandler}
                    >
                      Đăng xuất
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
