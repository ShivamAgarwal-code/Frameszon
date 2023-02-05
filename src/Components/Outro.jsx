import React from "react";
import { BsFillCalendar2CheckFill, BsFillInboxesFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineLooksOne } from "react-icons/md";

const Outro = () => {
  return (
    <div
      id="Outro"
      className="px-16 py-10 w-full flex flex-col justify-center self-center text-center items-center align-middle bg-slate-50"
    >
      <div className="text-slate-400 font-bold md:text-4xl text-lg">
        Can’t wait for your new look?
      </div>
      <div className="text-slate-900 font-normal md:text-base text-xs opacity-80 mt-4">
        Get your superpower delivered to your doorstep at a lightning speed
      </div>
      <div className="flex md:flex-row flex-col justify-around w-full md:px-60 mt-8 mb-8">
        <div className="flex flex-col justify-center self-center items-center mb-2">
          <div className="md:h-32 md:w-32 h-20 w-20 md:p-2">
            <BsFillCalendar2CheckFill className="h-full w-full md:p-6 p-2 text-slate-400" />
          </div>
          <div className="md:mt-2 text-slate-500 font-normal text-xs md:text-sm text-center">
            14 Days Easy Return
          </div>
        </div>
        <div className="flex flex-col justify-center self-center items-center mb-2">
          <div className="md:h-32 md:w-32 h-20 w-20 md:p-2">
            <TbTruckDelivery className="h-full w-full md:p-6 p-2 text-slate-400" />
          </div>
          <div className="md:mt-2 text-slate-500 font-normal text-xs md:text-sm text-center">
            Free Delivery
          </div>
        </div>
        <div className="flex flex-col justify-center self-center items-center mb-2">
          <div className="md:h-32 md:w-32 h-20 w-20 md:p-2">
            <BsFillInboxesFill className="h-full w-full md:p-6 p-2 text-slate-400" />
          </div>
          <div className="md:mt-2 text-slate-500 font-normal text-xs md:text-sm text-center">
            Fast Shipping
          </div>
        </div>
        <div className="flex flex-col justify-center self-center items-center mb-2">
          <div className="md:h-32 md:w-32 h-20 w-20 md:p-2">
            <MdOutlineLooksOne className="h-full w-full md:p-6 p-2 text-slate-400" />
          </div>
          <div className="md:mt-2 text-slate-500 font-normal text-xs md:text-sm text-center">
            1 Year Warranty
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outro;
