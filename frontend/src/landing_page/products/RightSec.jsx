import React from "react";
export default function RightSec({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  LearMore,
  googleLink,
  appstrore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col mt-3  p-5">
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <a href="">TryDemo</a>
          <a className="mx-4" href="">
            LearnMore
          </a>
          <br />
          <div className="mt-2">
            <img
              style={{ width: "25%" }}
              src="./media/images/googlePlayBadge.svg"
              alt=""
            />{" "}
            &nbsp; &nbsp;
            <img
              style={{ width: "22%" }}
              src="/media/images/appstoreBadge.svg"
              alt=""
            />
          </div>
        </div>
        <div className="col">
          <img style={{ width: "100%" }} src={imageURL} alt="" />
        </div>
      </div>
    </div>
  );
}
