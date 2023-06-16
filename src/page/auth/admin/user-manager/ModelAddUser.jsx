import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllUser, registerAsync } from "../../../../redux/auth.slice";

function ModelAddUser({ title, onClose, isOpen }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
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
      await dispatch(getAllUser());
      toast.success("Đăng kí thành công.");
    } catch (error) {
      toast.error("Đăng kí thất bại. Email đã tồn tại");
    }
  };
  return (
    <>
      {isOpen && (
        <div className="modal-x">
          <div className="modal-x-body">
            <div className="modal-x-title">
              <h3>{title}</h3>
              <button onClick={onClose}>X</button>
            </div>
            <div className="modal-x-content">
              <form onSubmit={registerSubmitHandler}>
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
                  Thêm
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModelAddUser;
