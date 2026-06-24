import React from "react";
function Hero() {
  return (
    <div>
      <div className="text-center mt-5 p-5 mb-5">
        <h1>Pricing</h1>
        <p>Free equity investments and flat ₹20 traday and F&O trades</p>
        <hr className="mt-5  " />
      </div>

      <div className="container">
        <div className="row text-center">
          <div className="col">
            <img src="media/images/pricingEquity.svg" alt="" />
            <h3>Free equity delivery</h3>
            <p className="mx-5 text-muted">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col">
            <img src=" media/images/intradayTrades.svg" alt="" />
            <h3>Intraday and F&O trades</h3>
            <p className="mx-4 text-muted">
              Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
            </p>
          </div>
          <div className="col">
            <img src="media/images/pricingEquity.svg" alt="" />
            <h3>Free direct MF</h3>
            <p className="mx-4 text-muted">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
