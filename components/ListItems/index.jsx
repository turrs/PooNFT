import React from "react";

const ListItems = () => {
  return (
    <div className="pt-2 hover:scale-105">
      <div className="flex border-white border-solid border-2 rounded-[10px] p-2 ">
        <div className="w-4/12 flex justify-center items-center">
          <p className="text-red">Phanbots</p>
        </div>
        <div className="w-4/12 flex justify-center items-center">
          <p className="text-white">5</p>
        </div>
        <div className="w-4/12 flex justify-center items-center">
          <p className="text-green">5</p>
        </div>
      </div>
    </div>
  );
};

export default ListItems;
