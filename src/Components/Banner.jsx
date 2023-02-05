import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "../styles.css";
import first from "../assets/luxury.jpg";
import second from "../assets/luxury_mobile.jpg";
import third from "../assets/walkin.png";
import fourth from "../assets/walkin_mobile.png";
import fifth from "../assets/wintersale.png";
import sixth from "../assets/wintersale_mobile.png";
import seventh from "../assets/location.png";
import eight from "../assets/location_mobile.png";

const Banner = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleWindowResize = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="mx-auto d-flex justify-content-center">
      <div id="Banner" className="drop-shadow-xl">
        <Carousel
          autoPlay
          dynamicHeight
          infiniteLoop
          swipeable
          useKeyboardArrows
          showThumbs={false}
        >
          {screenWidth > 768 ? (
            <img src={first} alt="banner" />
          ) : (
            <img src={second} alt="banner" />
          )}
          {screenWidth > 768 ? (
            <img src={third} alt="banner" />
          ) : (
            <img src={fourth} alt="banner" />
          )}
          {screenWidth > 768 ? (
            <img src={fifth} alt="banner" />
          ) : (
            <img src={sixth} alt="banner" />
          )}

          {screenWidth > 768 ? (
            <img src={seventh} alt="banner" />
          ) : (
            <img src={eight} alt="banner" />
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
