import React from "react";
import { moneyFormat } from "../../utils/money-format";

const bannerInfo = {
  title: "Bata Shoes",
  subtitle: "Series 7",
  price: 2400000,
  description:
    "Với giá cực rẻ bạn đã sở hữu ngay đôi giày siêu đẹp này rồi. Còn chờ gì nửa thêm vào giỏ hàng ngay thôi.",
  image: "../../assets/img/banner.png",
};

function Banner() {
  const { title, subtitle, price, description, image } = bannerInfo;
  return (
    <section className="banner-bg">
      <div className="container-banner">
        <div className="banner">
          <div className="left">
            <h2>{title}</h2>
            <h1>{subtitle}</h1>
            <p className="price">Giá chỉ {moneyFormat(price)} VND</p>
            <p className="text">{description}</p>
            {/* <button className="btn btn-addCart">Add To Cart</button> */}
          </div>
          <div className="right">
            <div className="bg" />
            <div className="img">
              <img alt="" src={image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
