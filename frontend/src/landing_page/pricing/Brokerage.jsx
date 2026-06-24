import React from "react";
function Brokerage() {
  return (
    <div className="containe mt-5 text-center mb-5 p-5">
      <div className="row">
        <div className="col p-5">
          <h5>
            <a style={{ textDecoration: "none" }} href="">
              Brokerage calculator
            </a>
          </h5>
          <ul style={{textAlign:'left',lineHeight:'2.5',fontSize:'12px'}} className="text-muted mt-3">
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col">
          <h5>
            <a style={{ textDecoration: "none" }} href="">
              List of charges
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
