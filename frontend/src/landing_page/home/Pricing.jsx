import React from "react";
export default function pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h2>Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a style={{ textDecoration: "none" }} href="" className="ml-5">
            See Pricing{" "}
            <i
              className="fa-solid fa-arrow-right"
              style={{ color: "#000000" }}
            ></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="p-2 col-6 ">
          <div className="row">
            <div className="col-6 border ">
              <div className="text-center mt-4">
                <h2>&#8377;0</h2>
                <p>Free equity delivery and <br /> direct mutual funds</p>
              </div>
            </div>
            <div className="col-6 border">
              <div className="text-center mt-4">
                <h2>&#8377;20</h2>
                <p>Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
