import React from "react";
import desktopImage from "../assets/img/banner.jpg";
import tabletImage from "../assets/img/banner-tablette.jpg";
import mobileImage from "../assets/img/banner-mobile.jpg";

const Banner = () => {
  return (
    <div className="position-relative">
      <picture>
        <source media="(min-width: 1024px)" srcSet={desktopImage} />

        <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={tabletImage} />

        <source media="(max-width: 767px)" srcSet={mobileImage} />

        <img src={desktopImage} alt="John Doe" className="img-fluid w-100" style={{ maxHeight: "600px", width: "100%" }} />
      </picture>
    </div>
  );
};

export default Banner;
