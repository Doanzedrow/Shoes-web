import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RoleEnums } from "../../../enums/role.enums";
import { loginAsync } from "../../../redux/auth.slice";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const backUrl = new URLSearchParams(location.search).get("backUrl");
  const { isLoading, roles } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const isAdmin = roles.includes(RoleEnums.Admin);
  const inputChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Vui lòng điền đầy đủ thông tin");
    }
    try {
      await dispatch(loginAsync({ email, password })).unwrap();
      navigate(backUrl || "/");
    } catch (error) {
      toast.error("Email hoặc mật khẩu không hợp lệ");
    }
  };

  return (
    <>
      <div className="auth-page">
        <form className="auth-form" onSubmit={loginSubmitHandler}>
          <h3>Đăng nhập!</h3>
          <div className="form-group">
            <label className="mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-group">
            <label className="mb-1" htmlFor="password">
              Mật khẩu
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-check mb-2">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Lưu tài khoản
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 mb-2"
            disabled={isLoading}
          >
            Đăng nhập
          </button>
          <p className="text-center">
            Chưa có tài khoản? <Link to="/register"> Đăng kí</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignIn;
