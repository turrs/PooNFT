import { useRouter } from "next/router";
import React from "react";
import { AppstoreOutlined, UserOutlined } from "@ant-design/icons";
const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="bg-black md:p-5 pt-10 rounded-[20px] border-white border-solid  ">
      <div
        onClick={() => router.push("/")}
        className="bg-purple flex justify-center items-center rounded-[10px] p-2  md:m-2 m-1 shadow-white-50 shadow-md  border-red border-solid border-2"
      >
        <div className="flex justify-center p-2">
          <AppstoreOutlined style={{ color: "white", fontSize: 18 }} />
        </div>
        <div className="hidden md:block">
          <p className="text-white">Collection</p>
        </div>
      </div>
      <div
        onClick={() => router.push("/portofolio")}
        className="bg-purple flex justify-center items-center rounded-[10px] p-2  md:m-2 m-1 shadow-white-50 shadow-md  border-red border-solid border-2"
      >
        <div className="flex justify-center p-2">
          <UserOutlined style={{ color: "white", fontSize: 18 }} />
        </div>
        <div className="hidden md:block">
          <p className="text-white">User Portofolio</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
