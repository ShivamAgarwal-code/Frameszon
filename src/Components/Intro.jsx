import React from "react";
// import { GiSunglasses } from "react-icons/gi";
// import { ImPriceTags } from "react-icons/im";
// import { IoIosPeople } from "react-icons/io";

const Intro = () => {
  return (
    <div
      id="Intro"
      className="px-1 pt-0 md:pb-20 pb-10 w-screen flex flex-col justify-center self-center text-center items-center align-middle bg-slate-50 mb-20"
    >
      {/* <div className="text-slate-500 font-normal md:text-base text-xs opacity-80 mt-4">
        But the big question is...
      </div>
      <div className="text-slate-700 font-bold md:text-4xl text-xl">
        Who Are We?
      </div> */}
      <div>
        <img
          className="md:h-32 h-16 m-6"
          src={require("../assets/logo.png")}
          alt="logo"
        />
      </div>
      <div className="text-slate-500 font-normal md:text-base text-xs opacity-80">
        Welcome to the future of eyewear shopping. Frameszon brings you an
        exclusive collection of curated designs, that redefines Gen Z style!
      </div>
      <div className="text-slate-500 font-bold md:text-2xl text-lg my-4">
        <h1>Why Choose Frameszon?</h1>
      </div>
      <div className="text-slate-500 font-normal md:text-base text-xs opacity-80">
        Redefining the eyewear shopping experience. Just pick, click and bling
        it on!
      </div>
      <div className="flex flex-col md:flex-row justify-around mt-4 w-3/4">
        <div className="flex flex-col justify-center items-center mb-4">
          <div className="p-2 md:h-32 md:w-32 h-20 w-20 drop-shadow-md bg-white rounded-full md:my-6 my-2 mx-16 flex self-center justify-center text-center items-center align-middle">
            <img
              src={require("./assets/categories/premium2.png")}
              alt="banner"
            />
          </div>
          <div className="mt-2 text-slate-400 font-normal text-xs text-center">
            <h3>Premium Quality</h3>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-4">
          <div className="p-2 md:h-32 md:w-32 h-20 w-20 drop-shadow-md bg-white rounded-full md:my-6 my-2 mx-16 flex self-center justify-center text-center items-center align-middle">
            {/* <ImPriceTags className="h-full w-full md:p-6 p-2 text-slate-500" /> */}
            <img src={require("./assets/income.png")} alt="banner" />
          </div>
          <div className="mt-2 text-slate-400 font-normal text-xs text-center">
            <h3>Affordable</h3>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-4">
          <div className="p-2 md:h-32 md:w-32 h-20 w-20 drop-shadow-md bg-white rounded-full md:my-6 my-2 mx-16 flex self-center justify-center text-center items-center align-middle">
            <img src={require("./assets/person.png")} alt="banner" />
          </div>
          <div className="mt-2 text-slate-400 font-normal text-xs text-center">
            <h3>5000+ Happy Customers</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
