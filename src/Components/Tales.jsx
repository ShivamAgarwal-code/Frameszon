import React from "react";

const Header = () => {
  return (
    <div id="Header">
      {/* <div className="absolute drop-shadow-xl font-extrabold text-slate-400 text-7xl md:text-[14rem] self-center text-center z-20">
        PREMIUM EYEWEAR
      </div> */}

      <img
        src={require("../assets/infog.jpeg")}
        alt="premium range"
        width="100%"
        height="600px"
      />

      {/* <a href="https://goo.gl/maps/Yrp33mok4ph5vLrs7">
          <div className="drop-shadow-md md:mt-0 mt-4 py-2 px-4 bg-slate-500 text-white rounded-lg transition-colors font-semibold flex flex-row  hover:border-2 hover:border-slate-500 hover:text-slate-500 justify-center align-middle self-center text-center items-center cursor-pointer">
            <div className="mr-2 hover:text-black" /> Have a look
          </div>
        </a> */}

      {/* <div className="vert-move2 absolute w-40 h-40 md:w-[500px] md:h-[500px] top-[8rem] -left-8 md:left-[-12rem] rounded-full bg-gradient-to-r from-slate-500 z-10"></div>
      <div className="vert-move3 absolute w-10 h-10 md:w-[200px] md:h-[200px] top-[18rem] right-8 md:right-[6rem] rounded-full bg-gradient-to-l from-slate-500 z-10"></div>
      <div className="vert-move1 absolute w-[100px] h-[100px] top-96 md:top-[10rem] -left-16 md:left-[12rem] rounded-full bg-gradient-to-r from-slate-700 z-10"></div> */}
    </div>
  );
};

export default Header;
