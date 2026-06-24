import React from "react";
function Award() {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-6 p-5">
          <img src="./media/images/largestBroker.svg" alt="sdf" />
        </div>
        <div className="col-6">
          <div className="row p-5">
            <h1>Largest stock broker in India</h1>
            <p>
              2+ million Zerodha clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in:
            </p>

            <div className="row mt-3">
              <div className="col-6">
                <ul>
                  <li>Futures and Options</li>
                  <li>Futures and Options</li>
                  <li>Futures and Options</li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>Futures and Options</li>
                  <li>Futures and Options</li>
                  <li>Futures and Options</li>
                </ul>
              </div>
              <img
                className="  "
                style={{ width: "95%" }}
                src="./media/images/pressLogos.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Award;
