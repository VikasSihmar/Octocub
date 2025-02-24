import React from "react";
import "../Style/PageBanner.css";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@material-ui/icons/ArrowRightTwoTone";

const PageBanner = (props) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="page-banner">
      <h1>{props.title}</h1>
      <div className="path-div">
        <Link to="/" onClick={handleScrollToTop}>
          Home
        </Link>
        <KeyboardArrowRightIcon />
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default PageBanner;
