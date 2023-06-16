import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getHotsProduct } from "../../redux/product.slice";
import Item from "../item";
import Section from "../section";
import Title from "../title";
function ProductHot() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const { hots } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotsProduct());
  }, [dispatch]);

  return (
    <Section id="product-hot">
      <Title label="Sản phẩm bán chạy" />
      <div className="product-list">
        <Slider {...settings}>
          {hots?.length > 0 &&
            hots.map((product, idx) => (
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
            ))}
        </Slider>
      </div>
    </Section>
  );
}

export default ProductHot;
