import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerAsync } from "../../../redux/auth.slice";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: "",
    email: "admin@gmail.com",
    password: "1234",
  });

  const inputChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const registerSubmitHandler = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    if (!name || !email || !password) {
      toast.error("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    try {
      await dispatch(registerAsync({ name, email, password })).unwrap();
      toast.success("Đăng kí thành công.");
    } catch (error) {
      console.log(error);
      toast.error("Đăng kí thất bại. Email đã tồn tại");
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={registerSubmitHandler}>
        <h3>Đăng kí tài khoản!</h3>
        <div className="form-group">
          <label className="mb-1" htmlFor="name">
            Tên của bạn
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="form-group">
          <label className="mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
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
            onChange={inputChangeHandler}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100 mb-2"
          disabled={isLoading}
        >
          Đăng kí
        </button>
        <p className="text-center">
          Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
