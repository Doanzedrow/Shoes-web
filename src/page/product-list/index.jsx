import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "../../components/item";
import NoImage from "../../assets/images/no_image.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../redux/product.slice";

function ProductList() {
  const { allProduct } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);
  return (
    <main>
      <section className="store">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Sản phẩm
                  </li>
                </ol>
              </nav>
            </div>
            <div id="aside" className="col-md-3">
              {/* aside Widget */}
              <div className="aside">
                <h3 className="aside-title">LOẠI</h3>
                <div className="checkbox-filter">
                  <div className="input-checkbox">
                    <input type="checkbox" id="category-1" />
                    <label htmlFor="category-1">
                      <span />
                      NIKE
                      <small>(120)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="category-2" />
                    <label htmlFor="category-2">
                      <span />
                      ADDIAS
                      <small>(740)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="category-3" />
                    <label htmlFor="category-3">
                      <span />
                      JORDAN
                      <small>(1450)</small>
                    </label>
                  </div>
                </div>
              </div>
              {/* /aside Widget */}
              <div className="aside">
                <h3 className="aside-title">GIỚI TÍNH</h3>
                <div className="checkbox-filter">
                  <div className="input-checkbox">
                    <input type="checkbox" id="gender-1" />
                    <label htmlFor="gender-1">
                      <span />
                      NAM
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="gender-2" />
                    <label htmlFor="gender-2">
                      <span />
                      Nữ
                    </label>
                  </div>
                </div>
              </div>
              {/* /aside Widget */}
              <div className="aside">
                <h3 className="aside-title">SẮP XẾP THEO</h3>
                <div className="radio-filter">
                  <div className="input-radio">
                    <input type="radio" id="name-1" name="arrange" />
                    <label htmlFor="name-1">
                      <span />
                      Tên A-Z
                    </label>
                  </div>
                  <div className="input-radio">
                    <input type="radio" id="name-2" name="arrange" />
                    <label htmlFor="name-2">
                      <span />
                      Tên Z-A
                    </label>
                  </div>
                  <div className="input-radio">
                    <input type="radio" id="price-1" name="arrange" />
                    <label htmlFor="price-1">
                      <span />
                      Giá cao đến thấp
                    </label>
                  </div>
                  <div className="input-radio">
                    <input type="radio" id="price-2" name="arrange" />
                    <label htmlFor="price-2">
                      <span />
                      Giá thấp đến cao
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div id="store" className="col-md-9">
              <div>
                <div className="row gy-4">
                  {allProduct?.length > 0 &&
                    allProduct.map((product, idx) => (
                      <div
                        className="col col-md-4 col-sm-6 col-xs-12"
                        key={product.id}
                      >
                        <Item
                          productId={product.id}
                          key={product.id}
                          url={`/product/${product.id}`}
                          image={
                            product.product_images?.length > 0
                              ? product.product_images[0]
                              : NoImage
                          }
                          name={product.name}
                          price={product.price}
                          isNew={1}
                          salePercent={product.discount}
                          star={product.rating}
                          details={product.product_details}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="store-filter clearfix">
            <ul className="store-pagination">
              <li className="active">1</li>
              <li>
                <Link to="#">2</Link>
              </li>
              <li>
                <Link to="#">3</Link>
              </li>
              <li>
                <Link to="#">4</Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-angle-right" />
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </section>
    </main>
  );
}

export default ProductList;
