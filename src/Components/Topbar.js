import React, { useState, useEffect, useRef } from "react";
import { ImagesData } from "./ImagesData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Hidden from "@material-ui/core/Hidden";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const Topbar = () => {
  const laptopData = useSelector((state) => state.globalData.laptop);
  const accessoriesData = useSelector((state) => state.globalData.accessories);
  const medicalData = useSelector((state) => state.globalData.medical);
  const mobileData = useSelector((state) => state.globalData.mobile);

  const [current, setCurrent] = useState(0);
  let length = ImagesData.length;
  let previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  let nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 5000);
  }, [current]);

  const [showMenu, setShowMenu] = useState(false);

  let handelMenuShow = () => {
    setShowMenu(!showMenu);
  };

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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/allProduct",
                    state: { data: laptopData },
                  }}
                >
                  Laptop
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/allProduct",
                    state: { data: mobileData },
                  }}
                >
                  Mobile
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/allProduct",
                    state: { data: accessoriesData },
                  }}
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/allProduct",
                    state: { data: medicalData },
                  }}
                >
                  Medical
                </Link>
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
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                position: "absolute",
                top: "0",
                width: "100%",
              }}
            >
              <img src={logo} className="logo-mobile" />
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handelMenuShow}
              >
                <MenuIcon />
              </IconButton>
            </div>

            <div
              id="mobileMenu"
              className={showMenu ? "mobileMenuShow" : "mobileMenuHidden"}
            >
              <div
                style={{
                  background: "#21AAE1",
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handelMenuShow}
                >
                  <ArrowUpwardIcon style={{ color: "white" }} />
                </IconButton>
              </div>
              <p>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Home
                </Link>
              </p>
              <p>
                <Link
                  to={{
                    pathname: "/allProduct",
                    state: { data: laptopData },
                  }}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Laptop
                </Link>
              </p>
              <p>
                <Link
                  to={{
                    pathname: "/allProduct",
                    state: { data: mobileData },
                  }}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Mobile
                </Link>
              </p>
              <p>
                <Link
                  to={{
                    pathname: "/allProduct",
                    state: { data: accessoriesData },
                  }}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Accessories
                </Link>
              </p>
              <p>
                <Link
                  to={{
                    pathname: "/allProduct",
                    state: { data: medicalData },
                  }}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Medical
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Hidden>
    </>
  );
};

export default Topbar;
