import React from "react";
export default function Hero() {
  return (
    <div className="container text-center">
      <div className="row">
        <img
          src="media/images/homeHero.png"
          alt="HeroImg"
          style={{ width: "100%" }}
        />
        <h3 className="mt-4">Invest in everything</h3>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button
          className="p-2 btn btn-primary btn-lg"
          style={{ width: "20%", margin: "auto" }}
        >
          SignUp Now
        </button>

       
      </div>
    </div>
  );
}
