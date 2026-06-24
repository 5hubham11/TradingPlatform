export default function Hero() {
  return (
    <div style={{ backgroundColor: "rgb(56, 126, 209)",height:'400px' }}>
      <div className="container ">
        <div className="row p-5 mb-5">
          <div className="col">
            <h5 style={{ color: "white" }}>Support Portal</h5>
          </div>
          <div style={{ textAlign: "right" }} className="col">
            <a style={{ color: "white" }} href="">
              Track Tickets
            </a>
          </div>
        </div>
        <div className="container-white ">
          <div className="row">
            <div className="col mb-5">
              <h4>
                Search for an answer or browse help topics to create a ticket
              </h4>
              <div class="input-group " style={{ height: "45%" }}>
                <input
                  placeholder="Eg. how do I activate F&O"
                  type="text"
                  class="form-control"
                />
              </div>

              <a className="anchorTag" href="">
                Track account opening
              </a>
              <a className="anchorTag" href="">
                Track segment activation
              </a>
              <a className="anchorTag" href="">
                Intraday margins
              </a>
              <a className="anchorTag" href="">
                Kite user manual
              </a>
            </div>
            <div className="col ">
              <h4>Featured</h4>
              <div>
                <ol>
                  <li>
                    <a className="anchorTag" href="">
                      Current Takeovers and Delisting - January 2024
                    </a>
                  </li>
                  <li>
                    <a className="anchorTag  " href="">
                      Latest Intraday leverages - MIS & CO
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
