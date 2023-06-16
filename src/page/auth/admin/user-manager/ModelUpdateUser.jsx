import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllUser, updateUser } from "../../../../redux/auth.slice";

function ModelUpdateUser({ title, onClose, isOpen, user }) {
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

  const { name, email } = formData;
  const registerSubmitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    try {
      await dispatch(updateUser({ id: user.id, name, email })).unwrap();
      toast.success("Cập nhật thành công.");
      await dispatch(getAllUser());
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      setFormData((prevState) => ({
        ...prevState,
        name: user.name,
      }));
      setFormData((prevState) => ({
        ...prevState,
        email: user.email,
      }));
    }
  }, [user]);

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
                    value={name}
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
                    value={email}
                    onChange={inputChangeHandler}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 mb-2"
                  disabled={isLoading}
                >
                  Cập nhật
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModelUpdateUser;
