import React from "react";
function Team() {
  return (
    <div className="container mt-5 ">
      <h2 className="text-center">People</h2>
      <div className="row p-5">
        <div className="col text-center">
          <img
            style={{ width: "60%", borderRadius: "100%" }}
            src="./media/images/185197861.jpg"
            alt=""
          />
          <div >
            <h4>Shubham kumar</h4>
            <p>Founder, CEO</p>
          </div>
        </div>
        <div className="col mt-4">
          <p>
            Shubham bootstrapped and founded TheTrader in 2026 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry. He
            is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).
            <br /> <br /> Playing basketball is his zen.
          </p>
          <p>
            Connect on  <a href=""> Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href=""> Twitter</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
