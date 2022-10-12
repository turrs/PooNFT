import React from "react";
import ConnectToWallet from "../ConnectToWallet";
import SearchBar from "../SearchBar";

const Headers = ({ connect }) => {
  return (
    <div className=" flex bg-black w-full p-5 pt-0 border-white border-solid h-[60px] ">
      <div className="flex flex-row items-center p-2 pl-5 w-4/12">
        <div>
          <p className="text-white">Poo</p>
        </div>
        <div>
          <p className="text-red">NFT</p>
        </div>
      </div>
      <div className="flex w-4/12 ">
        {/* <div className="w-[130px] md:w-[1200px] -ml-8">
          <SearchBar title="Search" />
        </div> */}
      </div>
      <div className="flex w-4/12 p-1 justify-end ">
        <div className="p-1">{connect && <ConnectToWallet />}</div>
      </div>
    </div>
  );
};

export default Headers;
