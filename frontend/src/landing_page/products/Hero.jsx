import React from "react";
import LeftSec from "./LeftSec";
function Hero() {
  return (
    <div>
      <div className="text-center mt-5 p-3 mb-5 mb-5">
        <h2>Technology</h2>
        <h4 className="text-muted">
          Sleek, modern and intuitive trading platforms
        </h4>
        <p>
          Check out our{" "}
          <a style={{ textDecoration: "none" }} href="">
            investment offerings
          </a>{" "}
          <i
            class="fa-solid fa-arrow-right"
            style={{ color: " rgb(0, 0, 0);" }}
          ></i>
        </p>
      </div>
      <hr className="mx-5 mt-5" />
    </div>
  );
}

export default Hero;
