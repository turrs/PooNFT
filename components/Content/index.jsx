import { useRouter } from "next/router";
import React from "react";
import ListItems from "../ListItems";

const Content = () => {
  const router = useRouter();
  const onCollection = () => {
    var symbol = "smb";
    router.push(`/collection/${symbol}`);
  };
  return (
    <div className="flex flex-col ">
      <div className="flex border-gray border-solid border-2 rounded-[10px] p-2 ">
        <div className="w-4/12 flex justify-center items-center">
          <p className="text-gray font-['Poppins']">Name</p>
        </div>
        <div className="w-4/12 flex justify-center items-center">
          <p className="text-gray font-['Poppins']">Floor</p>
        </div>
        <div className="w-4/12 flex justify-center items-center">
          <p className="text-gray font-['Poppins']">Total Volume</p>
        </div>
      </div>
      <div
        className="pt-2 hover:scale-105 "
        symbol="smb"
        onClick={() => onCollection()}
      >
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
      <ListItems></ListItems>
    </div>
  );
};

export default Content;
