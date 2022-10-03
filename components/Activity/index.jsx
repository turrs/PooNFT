import React from "react";

const Activity = () => {
  return (
    <div className="">
      <div className="p-2">
        <div className="flex justify-center items-center bg-red border-white border-solid border-2 rounded-[10px] p-2">
          <p className="text-white">Activity</p>
        </div>
      </div>

      <div className="p-1  hover:scale-105">
        <div className="flex flex-wrap justify-around items-center bg-purple border-red border-solid border-2 rounded-[10px] p-2">
          <div>
            <p className="text-white">SOLD</p>
            <p className="text-white">#3543</p>
          </div>
          <div>
            <p className="text-gray">by</p>
          </div>
          <div>
            <p className="text-white">HWE..XHW</p>
          </div>
        </div>
      </div>
      <div className="p-1  hover:scale-105">
        <div className="flex flex-wrap justify-around items-center bg-purple border-red border-solid border-2 rounded-[10px] p-2">
          <div>
            <p className="text-white">List</p>
            <p className="text-white">#3543</p>
          </div>
          <div>
            <p className="text-gray">by</p>
          </div>
          <div>
            <p className="text-white">HWE..XHW</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
