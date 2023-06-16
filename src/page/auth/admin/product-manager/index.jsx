import React, { useEffect, useState } from "react";
import AdminSideBar from "../../../../components/admin-sidebar";
import ModelUpdateProduct from "./ModelUpdateProduct";
import ModelAddProduct from "./ModelAddProduct";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getAllProduct } from "../../../../redux/product.slice";
import { toast } from "react-toastify";
import { moneyFormat } from "../../../../utils/money-format";

function ProductManager() {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const products = useSelector((state) => state.product.allProduct);
  const isLoading = useSelector((state) => state.product.isLoading);
  const [selectedId, setSelectedId] = useState(null);
  const selectedProduct = selectedId
    ? products.find((p) => p.id === selectedId)
    : {};

  const dispatch = useDispatch();

  const deleteProductHandler = async (id) => {
    try {
      const result = window.confirm("Bạn muốn xóa sản phẩm này");
      if (result) {
        await dispatch(deleteProduct({ id })).unwrap();
        toast.success("Xóa sản phẩm thành công");
        await getAllProductHandler();
      }
    } catch (error) {
      toast.error("Đã có lỗi xảy ra");
    }
  };

  const getAllProductHandler = async () => {
    try {
      await dispatch(getAllProduct()).unwrap();
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getAllProductHandler();
  }, []);
  return (
    <div>
      <div className="tables">
        <ModelAddProduct
          title="Thêm sản phẩm"
          isOpen={isOpenAdd}
          onClose={() => setIsOpenAdd(false)}
        />
        <ModelUpdateProduct
          title="Cập nhật sản phẩm"
          isOpen={isOpenUpdate}
          onClose={() => setIsOpenUpdate(false)}
          product={selectedProduct}
        />

        <h2 className="title1 mb-4">Danh sách sản phẩm</h2>
        <div
          className="bs-example widget-shadow"
          data-example-id="hoverable-table"
        >
          <button
            className="btn btn-primary mb-2"
            onClick={() => setIsOpenAdd(true)}
          >
            Thêm mới
          </button>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Content</th>
                  <th>Discount</th>
                  <th>Rating</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {isLoading && !products.length && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 24,
                    }}
                  >
                    <div>
                      <div className="loader"></div>
                    </div>
                  </div>
                )}
                {products.length > 0 &&
                  products.map((product) => (
                    <tr key={product.id}>
                      <th scope="row">{product.id}</th>
                      <td>{product.images}</td>
                      <td>{product.name}</td>
                      <td>{moneyFormat(product.price)}</td>
                      <td className="text-truncate" style={{ maxWidth: 250 }}>
                        {product.description}
                      </td>
                      <td className="text-truncate" style={{ maxWidth: 250 }}>
                        {product.content}
                      </td>
                      <td>{product.discount}</td>
                      <td>{product.rating}</td>

                      <td
                        className="project-actions text-left d-flex "
                        style={{ minWidth: 160 }}
                      >
                        <button
                          className="btn btn-info btn-sm me-2"
                          onClick={() => {
                            setIsOpenUpdate(true);
                            setSelectedId(product.id);
                          }}
                        >
                          <i className="fa-solid fa-pen-to-square" />
                          Sửa
                        </button>
                        <button
                          className="btn btn-danger btn-sm d-block"
                          onClick={() => deleteProductHandler(product.id)}
                        >
                          <i className="fa-solid fa-trash-can" />
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductManager;
