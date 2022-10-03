import React from "react";

const HeadList = () => {
  return (
    <div>
      <div className="flex border-gray border-solid border-2 rounded-[10px] p-2 ">
        <div className="w-4/12 flex justify-center items-center">
          <p className="text-gray font-['Poppins']">ID</p>
        </div>
        <div className="w-4/12 flex justify-center items-center">
          <p className="text-gray font-['Poppins']">Price</p>
        </div>
        <div className="w-4/12 flex justify-center items-center">
          <p className="text-gray font-['Poppins']">How Rare Rank</p>
        </div>
      </div>
    </div>
  );
};

export default HeadList;
