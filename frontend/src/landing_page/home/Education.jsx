import React from "react";
export default function Education() {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-6 p-4 ">
          <img style={{width:"100%"}} src="media\images\education.svg" alt="sdf" />
        </div>
        <div className="col-6 p-5">
          <h2>Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a style={{ textDecoration: "none" }} href="" className="ml-5">
           Versity{" "}
            <i
              className="fa-solid fa-arrow-right"
              style={{ color: "#000000" }}
            ></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
           <a style={{ textDecoration: "none" }} href="" className="ml-5">
            TradingQ&A{" "}
            <i
              className="fa-solid fa-arrow-right"
              style={{ color: "#000000" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}
