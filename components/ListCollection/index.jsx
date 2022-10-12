import Image from "next/image";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ListCollection = ({ data }) => {
  return (
    <div className="pt-2 hover:scale-105">
      <div className="flex border-white border-solid border-2 rounded-[10px] p-2 ">
        <div className="w-4/12 flex justify-center items-center">
          <LazyLoadImage
            alt={data.tokenMint}
            src={data.extra.img}
            width={80}
            height={60}
          />
          {/* <p className="text-red">{data.tokenMint}</p> */}
        </div>
        <div className="w-4/12 flex justify-center items-center">
          <p className="text-white">{data.price}</p>
        </div>
        <div className="w-4/12 flex justify-center items-center">
          <p className="text-green">
            {data.rarity.merarity === undefined
              ? "No Rank Data"
              : data.rarity.merarity.rank}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListCollection;
