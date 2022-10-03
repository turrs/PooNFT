import React from "react";

const HeadCollectionList = () => {
  return (
    <div className="flex  rounded-[10px] p-2 ">
      <div className="w-6/12 flex  ">
        <p className="text-gray font-['Poppins']">Name</p>
      </div>
      <div className="w-3/12 flex flex-col justify-center items-center m-1">
        <div className="flex flex-row flex-wrap justify-around items-center bg-purple rounded-[10px] w-full p-2 m-1">
          <div>
            <p className="text-white font-bold">Floor</p>
          </div>
          <div>
            <p className="text-gray">3</p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-around items-center bg-purple rounded-[10px] w-full p-2 m-1">
          <div>
            <p className="text-white font-bold">Avg. Sale</p>
          </div>
          <div>
            <p className="text-gray">3</p>
          </div>
        </div>
      </div>
      <div className="w-3/12 flex  flex-col justify-center items-center  m-1">
        <div className="flex flex-row flex-wrap justify-around items-center bg-purple rounded-[10px] w-full p-2 m-1">
          <div>
            <p className="text-white font-bold">Total Supply</p>
          </div>
          <div>
            <p className="text-gray">3000</p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-around items-center bg-purple rounded-[10px] w-full p-2 m-1">
          <div>
            <p className="text-white font-bold">Total Listed</p>
          </div>
          <div>
            <p className="text-gray">500</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadCollectionList;
