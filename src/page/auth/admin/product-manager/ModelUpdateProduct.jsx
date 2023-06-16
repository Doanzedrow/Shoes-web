import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerAsync } from "../../../../redux/auth.slice";
import {
  addNewProduct,
  addProductImage,
  updateProduct,
} from "../../../../redux/product.slice";

function ModelUpdateProduct({ product, title, onClose, isOpen }) {
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
    image: "",
    image2: "",
    image3: "",
  });

  const inputChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const registerSubmitHandler = async (e) => {
    e.preventDefault();
    const {
      name,
      description,
      content,
      discount,
      price,
      quantity,
      image,
      image2,
      image3,
    } = formData;
    if (!name || !description || !content || !price || !quantity) {
      toast.error("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    try {
      await dispatch(
        updateProduct({
          id: product.id,
          name,
          description,
          content,
          qty: quantity,
          price,
          discount,
        })
      ).unwrap();

      if (image.length) {
        await dispatch(
          addProductImage({
            product_id: product.id,
            path: image,
          })
        ).unwrap();
      }
      if (image2.length) {
        await dispatch(
          addProductImage({
            product_id: product.id,
            path: image2,
          })
        ).unwrap();
      }
      if (image3.length) {
        await dispatch(
          addProductImage({
            product_id: product.id,
            path: image3,
          })
        ).unwrap();
      }
      toast.success("Cập nhật thành công.");
    } catch (error) {
      toast.error("Cập nhật thất bại");
    }
  };

  useEffect(() => {
    if (product) {
      setFormData((prevState) => ({
        ...prevState,
        name: product.name,
      }));
      setFormData((prevState) => ({
        ...prevState,
        name: product.name,
      }));
      setFormData((prevState) => ({
        ...prevState,
        quantity: product.qty,
      }));
      setFormData((prevState) => ({
        ...prevState,
        description: product.description,
      }));
      setFormData((prevState) => ({
        ...prevState,
        content: product.content,
      }));
      setFormData((prevState) => ({
        ...prevState,
        price: product.price,
      }));
      setFormData((prevState) => ({
        ...prevState,
        discount: product.discount,
      }));
    }
  }, [product]);
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
                    value={formData.name}
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
                    value={formData.description}
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
                    value={formData.content}
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
                    value={formData.price}
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
                    value={formData.quantity}
                    onChange={inputChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <label className="mb-1" htmlFor="image">
                    Image 1
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="image"
                    name="image"
                    onChange={inputChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <label className="mb-1" htmlFor="image">
                    Image 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="image2"
                    name="image2"
                    onChange={inputChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <label className="mb-1" htmlFor="image3">
                    Image 3
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="image3"
                    name="image3"
                    onChange={inputChangeHandler}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 mb-2"
                  disabled={isLoading}
                >
                  Cập nhật
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModelUpdateProduct;
