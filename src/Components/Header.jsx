import React from "react";
import { SlLocationPin } from "react-icons/sl";

const Header = () => {
  return (
    <div
      id="Header"
      className="bg-slate-900 h-auto pb-10 px-16 flex flex-col overflow-clip justify-center z-10 relative"
    >
      <div className="absolute drop-shadow-xl font-extrabold text-slate-400 text-7xl md:text-[14rem] self-center text-center z-20">
        PREMIUM EYEWEAR
      </div>
      <div className="self-center animate pop delay z-20">
        <img
          src={require("../assets/pngegg.png")}
          alt="premium range"
          className="w-[50rem] h-auto vert-move drop-shadow-lg mt-32 md:mt-40"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between mx-3 pt-20">
        <div className="text-center md:text-left">
          <div className="text-slate-300 font-semibold drop-shadow-sm md:drop-shadow-lg text-sm md:text-2xl">
            Exclusively @Frameszon
          </div>
          <div className="text-slate-500 font-semibold drop-shadow-lg text-lg md:text-2xl">
            #WearItFeelIt
          </div>
        </div>
        <a href="https://goo.gl/maps/Yrp33mok4ph5vLrs7">
          <div className="drop-shadow-md md:mt-0 mt-2 py-2 px-3 bg-slate-500 text-white rounded-lg transition-colors font-semibold flex flex-row  hover:border-2 hover:border-slate-500 hover:text-slate-500 justify-center align-middle self-center text-center items-center cursor-pointer">
            <SlLocationPin className="mr-1 hover:text-black" /> Visit Store
          </div>
        </a>
      </div>
      <div className="vert-move2 absolute w-40 h-40 md:w-[500px] md:h-[500px] top-[8rem] -left-8 md:left-[-12rem] rounded-full bg-gradient-to-r from-slate-500 z-10"></div>
      <div className="vert-move3 absolute w-10 h-10 md:w-[200px] md:h-[200px] top-[18rem] right-8 md:right-[6rem] rounded-full bg-gradient-to-l from-slate-500 z-10"></div>
      <div className="vert-move1 absolute w-[100px] h-[100px] top-96 md:top-[10rem] -left-16 md:left-[12rem] rounded-full bg-gradient-to-r from-slate-700 z-10"></div>
    </div>
  );
};

export default Header;
