import React, { useState } from "react";
import Slider from "react-slick";
import NoImage from "../../../assets/images/no_image.jpg";
function ProductThumbnail({ images }) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="image-thumbnail">
      <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
        {images?.map((imgSrc, idx) => (
          <div key={idx} className="image-thumbnail--main">
            <img src={`${process.env.REACT_APP_Image_URL}/${imgSrc}`} alt="" />
          </div>
        ))}
        {!images.length && (
          <div className="image-thumbnail--main">
            <img src={NoImage} alt="" />
          </div>
        )}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        {...settings}
      >
        {images?.map((imgSrc, idx) => (
          <div key={idx} className="image-thumbnail--item">
            <img src={`${process.env.REACT_APP_Image_URL}/${imgSrc}`} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductThumbnail;
