import Hero from "./Hero.jsx";
import LeftSec from "./LeftSec.jsx";
import RightSec from "./RightSec.jsx";
import Universe from "./Universe.jsx";
export default function ProductPage() {
  return (
    <div>
      <Hero />
      <LeftSec
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        LearMore=""
        LearMore=""
        googleLink=""
      />
      <RightSec
        imageURL="media\images\console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo=""
        LearMore=""
        LearMore=""
        googleLink=""
      />
      <LeftSec
        imageURL="media\images\coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        LearMore=""
        LearMore=""
        googleLink=""
      />
       <RightSec
        imageURL=" media\images\kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo=""
        LearMore=""
        LearMore=""
        googleLink=""
      />
        <LeftSec
        imageURL="media/images/varsity.png"
        productName="
Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        LearMore=""
        LearMore=""
        googleLink=""
      />
      <Universe/>
    </div>
  );
}
