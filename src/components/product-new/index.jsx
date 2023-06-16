import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsProduct } from "../../redux/product.slice";
import Item from "../item";
import Section from "../section";
import Title from "../title";


function ProductNew() {
  const { news } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsProduct());
  }, [dispatch]);
  return (
    <Section id="product-new">
      <Title label="Sản phẩm mới" />
      <div className="product-list">
        <div className="row g-4">
          {news?.length > 0 &&
            news.map((product, idx) => (
              <div className="col col-md-3 col-sm-6 col-xs-12" key={idx}>
                <Item
                  productId={product.id}
                  key={product.id}
                  url={`/product/${product.id}`}
                  image={
                    product.product_images?.length > 0
                      ? product.product_images[0].path
                      : null
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
    </Section>
  );
}

export default ProductNew;
