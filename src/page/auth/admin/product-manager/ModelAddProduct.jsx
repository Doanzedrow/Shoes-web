import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerAsync } from "../../../../redux/auth.slice";
import { addNewProduct, getAllProduct } from "../../../../redux/product.slice";

function ModelAddProduct({ title, onClose, isOpen }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    content: "",
    brandId: "",
    discount: 0,
    price: 0,
    quantity: 0,
  });

  const inputChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const registerSubmitHandler = async (e) => {
    e.preventDefault();
    const { name, description, content, brandId, discount, price, quantity } =
      formData;
    if (!name || !description || !content || !discount || !price || !quantity) {
      toast.error("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    try {
      await dispatch(
        addNewProduct({
          name,
          description,
          content,
          qty: quantity,
          product_category_id: 1,
          brand_id: 1,
          price,
          discount,
          rating: 5,
        })
      ).unwrap();
      toast.success("Thêm sản phẩm thành công.");
      await dispatch(getAllProduct()).unwrap();

    } catch (error) {
      toast.error(error.message);
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
                    Name
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
                  <label className="mb-1" htmlFor="description">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    onChange={inputChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <label className="mb-1" htmlFor="content">
                    Content
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="content"
                    name="content"
                    onChange={inputChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <label className="mb-1" htmlFor="price">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    onChange={inputChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <label className="mb-1" htmlFor="quantity">
                    Quantity
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="quantity"
                    name="quantity"
                    onChange={inputChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <label className="mb-1" htmlFor="discount">
                    Discount
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="discount"
                    name="discount"
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

export default ModelAddProduct;
