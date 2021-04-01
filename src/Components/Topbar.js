import React, { useState } from "react";
import { ImagesData } from "./ImagesData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Hidden from "@material-ui/core/Hidden";
import logo from "../images/logo.jpg";

const Topbar = () => {
  const [current, setCurrent] = useState(0);
  let length = ImagesData.length;
  let previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  let nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // setInterval(() => {
  //   nextSlide();
  // }, 5000);

  return (
    <>
      <Hidden only={["xs", "sm"]}>
        <div style={{ position: "relative" }}>
          <section className="caro-slider">
            <ArrowBackIosIcon className="left-aero" onClick={previousSlide} />
            <ArrowForwardIosIcon className="right-aero" onClick={nextSlide} />
            {ImagesData.map((slide, index) => {
              return (
                <>
                  <div
                    className={
                      index === current ? "slide-custom active" : "slide-custom"
                    }
                    key={index}
                  >
                    {index === current && (
                      <img
                        src={slide.image}
                        alt="test image"
                        className="slider-image"
                      />
                    )}
                  </div>
                  <div
                    className={
                      index === current
                        ? "slider-text slide-text active"
                        : "slider-text slide-text"
                    }
                    key={index + 1}
                  >
                    <h1 className="inside-text">{slide.text}.</h1>
                  </div>
                </>
              );
            })}
          </section>
          <div id="menu">
            <img src={logo} className="logo" />
            <ul>
              <li>
                <a href="default.asp">Home</a>
              </li>
              <li>
                <a href="news.asp">Laptop</a>
              </li>
              <li>
                <a href="contact.asp">Mobile</a>
              </li>
              <li>
                <a href="about.asp">Accessories</a>
              </li>
              <li>
                <a href="about.asp">Medical</a>
              </li>
            </ul>
          </div>
        </div>
      </Hidden>
      <Hidden only={["md", "lg", "xl"]}>
        <div style={{ position: "relative" }}>
          <section className="caro-slider-mobile">
            <ArrowBackIosIcon
              className="left-aero-mobile"
              onClick={previousSlide}
            />
            <ArrowForwardIosIcon
              className="right-aero-mobile"
              onClick={nextSlide}
            />
            {ImagesData.map((slide, index) => {
              return (
                <>
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img
                        src={slide.image}
                        alt="test image"
                        className="slider-image-mobile"
                      />
                    )}
                  </div>
                  <div
                    className={
                      index === current
                        ? "slider-text-mobile slide-text active"
                        : "slider-text-mobile slide-text"
                    }
                    key={index + 1}
                  >
                    <h1 className="inside-text-mobile">{slide.text}.</h1>
                  </div>
                </>
              );
            })}
          </section>
          <div id="menu-mobile">
            <img src={logo} className="logo-mobile" />
            <ul>
              <li>
                <a href="default.asp">Home</a>
              </li>
              <li>
                <a href="news.asp">Laptop</a>
              </li>
              <li>
                <a href="contact.asp">Mobile</a>
              </li>
              <li>
                <a href="about.asp">Accessories</a>
              </li>
              <li>
                <a href="about.asp">Medical</a>
              </li>
            </ul>
          </div>
        </div>
      </Hidden>
    </>
  );
};

export default Topbar;
