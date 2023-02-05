import * as React from "react";
import shopping from "./assets/cart-shopping-solid.svg";
import heart from "./assets/heart-solid.svg";
import user from "./assets/user-solid.svg";
import Whatsapp from "./assets/whatsapp.svg";
import Navbar from "react-bootstrap/Navbar";

export default function Navrr() {
  return (
    <div className="mb-32">
      <Navbar fixed="top" bg="light" expand="lg">
        <div className="navs">
          <div className="row ">
            <div className="col-2 d-flex justify-content-between">
              <img
                className="logo img-fluid"
                src={require("../assets/logo.png")}
                alt="logo"
              />
            </div>
            <div className="col-10" style={{ color: "#001752" }}>
              <div className="mr-8 first-row flex-row-reverse d-flex">
                <button href="#" className="custom-btn px-2 mt-1">
                  <img
                    style={{ width: "17px", display: "inline-block" }}
                    className="mr-1"
                    src={Whatsapp}
                  />{" "}
                  Whatsapp
                </button>
                <a className="px-2 py-2">|</a>
                <a href="#" className="px-2 py-2">
                  Contact us
                </a>

                <a className="px-2 py-2">|</a>
                <a href="#" className="px-2 py-2">
                  FAQ?
                </a>
                <a className="px-2 py-2">|</a>
                <a href="#" className="px-2 py-2">
                  Franchise
                </a>
                <a className="px-2 py-2">|</a>
                <a href="#" className="px-2 py-2">
                  Home
                </a>
              </div>
              <div className="mt-3 mb-3 row">
                <div className="col-9">
                  <div className="form-outline search-box d-flex">
                    <input
                      type="search"
                      id="form1"
                      class="form-control"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      class="but btn btn-outline-secondary dropdown-toggle"
                      type=""
                    >
                      All categories
                    </button>
                  </div>
                </div>
                <div className="col-3 d-flex flex-row-reverse">
                  <img
                    className="mr-10 mt-1 ml-8"
                    style={{ height: "30px" }}
                    src={shopping}
                  />

                  <img
                    className="mt-1 ml-8"
                    style={{ height: "30px" }}
                    src={heart}
                  />

                  <img
                    className="mt-1 ml-8"
                    style={{ height: "30px" }}
                    src={user}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
