import React from "react";
import CategoriesData from "./CategoriesData";

const Category = () => {
  function Card(props) {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="rounded-full bg-white hover:bg-slate-300 cursor-pointer drop-shadow-lg md:h-28 md:w-28 h-16 w-16 mb-4 flex relative items-center justify-center transition grow">
          <img
            src={props.img}
            alt=""
            className="h-auto p-1 w-auto justify-center items-center relative drop-shadow-md"
          />
        </div>
        <div className="font-light md:font-medium text-xs md:text-sm text-slate-500 mb-4 md:mb-8">
          {props.name}
        </div>
      </div>
    );
  }

  return (
    <div id="Categories" className="m-8 md:mt-2 md:mx-55 mb-1">
      <div className="flex justify-center self-center align-middle items-center mb-8 md:mb-10 flex-col">
        <div className="font-medium md:font-bold text-center text-xl md:text-4xl drop-shadow-lg text-slate-500 mb-4 md:mb-8">
          Shop By Shape
        </div>
        <div className="h-[0.1rem] md:h-1 w-40 self-center bg-gradient-to-r from-white to-white via-slate-500"></div>
      </div>

      <div className="w-[100%] grid md:grid-cols-3 md:grid-rows-3 grid-cols-3">
        {CategoriesData.map((icon) => (
          <Card key={icon.id} img={icon.imgURL} name={icon.name} />
        ))}
      </div>
    </div>
  );
};

export default Category;
