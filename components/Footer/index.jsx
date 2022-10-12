import React from "react";
import {
  TwitterOutlined,
  GlobalOutlined,
  MailOutlined,
} from "@ant-design/icons";
const Footer = () => {
  return (
    <div className="flex flex-col justify-center bg-black p-10 ">
      <div className="flex flex-row justify-around ">
        <div>
          <div className="flex flex-row items-center ">
            <div>
              <p className="text-white">Poo</p>
            </div>
            <div>
              <p className="text-red">NFT</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-around w-[200px]">
          <div>
            <TwitterOutlined style={{ fontSize: "30px", color: "#8991A3" }} />
          </div>
          <div>
            <GlobalOutlined style={{ fontSize: "30px", color: "#8991A3" }} />
          </div>
          <div>
            <MailOutlined style={{ fontSize: "30px", color: "#8991A3" }} />
          </div>
        </div>
        <div>
          <p className="text-gray text-sm">Copyright 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
