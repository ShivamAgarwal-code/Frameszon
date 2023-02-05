import * as React from "react";

import truck from "../assets/truckfasts.png";
import ret from "../assets/return.png";
import pay from "../assets/secure payment.png";

export default function Service() {
  return (
    <>
      <div className="service row my-sm-12">
        <div className="col-12 col-lg-4 mb-sm-5">
          <div className="container-fluid text-left service-container">
            <div className="row align-items-center">
              <div className="col-10">
                <h4 className="heading-font">Fast shipping</h4>
                <p>
                  We understand that you need your eyewear as soon as possible.
                  That's why we offer fast shipping
                </p>
              </div>

              <div className="col-2 img-container">
                <img src={truck} alt="icon"></img>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4 mb-sm-5">
          <div className="container-fluid text-left service-container">
            <div className="row align-items-center">
              <div className="col-10">
                <h4 className="heading-font">14 Day easy return & refund </h4>
                <p>
                  In case you are not satisfied with your purchase, we have an
                  easy return and refund policy.
                </p>
              </div>

              <div className="col-2 img-container">
                <img src={ret} alt="icon"></img>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4 mb-sm-5">
          <div className="container-fluid text-left service-container">
            <div className="row align-items-center">
              <div className="col-10">
                <h4 className="heading-font">Secure payment gateway</h4>

                <p>
                  Our website is SSL certified and we use a secure payment
                  gateway to ensure that your information is safe and protected.
                </p>
              </div>

              <div className="col-2 img-container">
                <img src={pay} alt="icon"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
