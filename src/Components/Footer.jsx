import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaBell
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import "./newsletter.css";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <>
      <section className="p-2 h-30 shadow-lg rounded-2xl border-2 border-opacity-10 border-slate-500 lg:m-5 md:m-5 m-5 flex justify-center self-center align-middle items-center flex-col transition grow2 w-auto">
        <div className="container flexSB">
          <div className="left row">
            <h1>Stay in touch!</h1>
            <span>
              Subscribe to our newsletter so that we can spam you with lots of
              offers and discounts
            </span>
          </div>
          <div className="right row">
            <input
              type="text"
              placeholder="Enter email address"
              classname="rounded-2xl border-2 border-opacity-1"
            />
          </div>
          <div className="button center mt-[12px]">
            <button className="button2 inline p-2 bg-[#0F1629] hover:bg-white text-white rounded-2xl flex justify-center items-center">
              <FaBell className="mx-1" />
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <footer>
        <div
          id="ContactUs"
          className="flex overflow-clip flex-col md:px-20 pt-2 md:pt-10 pb-20 w-full md:justify-around justify-center self-center md:text-left text-center items-center align-middle bg-slate-900 relative"
        >
          <div className="flex md:flex-row flex-col w-full md:justify-between justify-center self-center md:text-left text-center items-center align-middle">
            <div className="flex flex-col gap-6 md:gap-12 my-8 z-20">
              <img
                className="md:h-36 md:w-64 h-20 w-40 drop-shadow-md self-center md:self-start"
                src={require("../assets/logo.png").default}
                alt="logo"
              />
              <a href="https://goo.gl/maps/Yrp33mok4ph5vLrs7">
                <div className="flex flex-col">
                  <p className="text-white font-bold">Store Location</p>
                  <p className="text-xs text-slate-300 md:text-base">
                    C-1, Block C, Connaught place, Opp. PVR Plaza
                  </p>
                  <p className="text-xs text-slate-300 md:text-base">
                    New Delhi, Delhi - 110001, India
                  </p>
                </div>
              </a>
              <div className="flex flex-col">
                <p className="font-bold text-white">Contact Us</p>
                {/* <p>
            Email:{" "}
            <span className="font-bold text-slate-500">support@domain.com</span>
          </p> */}
                <p className="text-xs md:text-base text-slate-300">
                  Phone: +91{" "}
                  <a href="tel:+918287751494">
                    <span className="text-base md:text-2xl font-bold">
                      8287751494
                    </span>
                  </a>
                  , +91{" "}
                  <a href="tel:+917982610896">
                    <span className="text-base md:text-2xl font-bold">
                      7982610896
                    </span>
                  </a>
                </p>
              </div>
              <div className="flex flex-row gap-12 text-xl font-bold self-center md:self-start">
                <FaTwitter className="text-slate-500 cursor-pointer transition grow" />
                <a href="https://www.instagram.com/frameszon/">
                  <FaInstagram className="text-slate-500 cursor-pointer transition grow" />
                </a>
                <FaFacebook className="text-slate-500 cursor-pointer transition grow" />
                <FaYoutube className="text-slate-500 cursor-pointer transition grow" />
              </div>
            </div>
            <div className="flex flex-col bg-white shadow-[5px_5px_120px_-20px_rgba(0,0,0,0.2)] rounded-[1.5rem] p-6 md:p-10 md:h-1/3 mb-4 z-20">
              <p className="text-xl md:text-4xl font-bold">Contact Us on</p>
              <p className="text-xl md:text-4xl font-bold text-slate-500">
                WhatsApp
              </p>
              <a href="https://api.whatsapp.com/send/?phone=%2B919560947266&text=Hello,+I%27m+interested+in+purchasing+eyeglasses.+Please+share+the+catalogue&app_absent=0">
                <button className="mt-10 py-4 flex justify-center items-center bg-transparent transition-all text-slate-500 font-bold px-4 border border-slate-500 w-72 h-8 ml-[-0.6rem] rounded-2xl hover:bg-slate-500 hover:text-white">
                  <div className="flex flex-row gap-1">
                    Chat Now <BsWhatsapp className="text-[1.3rem] ml-2" />
                  </div>
                </button>
              </a>
            </div>
            <div className="flex flex-col justify-between mt-3">
              <div className="flex flex-col gap-2 md:gap-4 font-medium mb-8 text-slate-300 text-base">
                <a href="#AboutUs">
                  <p>About Us</p>
                </a>
                <a href="#MenBestsellers">
                  <p>Men</p>
                </a>
                <a href="#WomenBestsellers">
                  <p>Women</p>
                </a>
                <a href="#InternationalBrands">
                  <p>International Brands</p>
                </a>
                <a href="#Banner">
                  <p>Offers</p>
                </a>
                <a href="#Categories">
                  <div className="flex font-semibold hover:bg-white hover:text-slate-500 hover:border-slate-500 hover:border-2 justify-center items-center text-sm text-white bg-slate-500 rounded-2xl w-60 h-8 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] cursor-pointer mt-2 transition-all">
                    SHOP CATEGORIES
                  </div>
                </a>
              </div>
              <div className="text-white opacity-50 text-xs text-center tracking-widest md:mt-16 mb-4 md:mb-0">
                Developed with ❤️ by @Alongrow
              </div>
            </div>
          </div>

          <div className="vert-move2 absolute w-[250px] h-[250px] top-[10rem] left-[28rem] rounded-full bg-gradient-to-b from-slate-500 z-10"></div>
          <div className="vert-move1 absolute w-[300px] h-[300px] top-[-12rem] left-[83rem] rounded-full bg-gradient-to-b from-slate-500 z-10"></div>
          <div className="vert-move3 absolute w-[250px] h-[250px] top-[20rem] left-[-13rem] rounded-full bg-gradient-to-b from-slate-500 z-10"></div>
          <div className="vert-move absolute w-[70px] h-[70px] bottom-[10rem] right-[-0.5rem] rounded-full bg-gradient-to-tl from-slate-500 z-10"></div>
          <div className="w-full h-[0.1rem] mb-4 bg-gradient-to-tr from-transparent to-transparent via-slate-100"></div>
          <div className="-mb-10">
            <p className="text-slate-300 text-bold text-sm">
              {new Date().getFullYear()} @Frameszon. All rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
