import { useRouter } from "next/router";
import React from "react";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="bg-black h-[1200px] p-5 rounded-[20px] border-white border-solid border-2 ">
      <div
        onClick={() => router.push("/")}
        className="bg-purple flex justify-center items-center rounded-[10px] p-2 m-2 shadow-white-50 shadow-md hover:scale-105 border-red border-solid border-2"
      >
        <p className="text-white">Collection</p>
      </div>
      <div className="bg-purple flex justify-center items-center rounded-[10px] p-2 m-2 shadow-white-50 shadow-md hover:scale-105 border-red border-solid">
        <p className="text-white">Popular</p>
      </div>
    </div>
  );
};

export default Sidebar;
