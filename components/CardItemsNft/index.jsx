import { useRouter } from "next/router";
import React from "react";

const CardItemsNft = ({ data }) => {
  console.log("waduh dataee", data);
  const router = useRouter();
  return (
    <div className="p-2 bg-purple border-black border-solid border-2 rounded-md">
      <div>
        <div className="md:w-[160px] md:h-[180px] w-[140px] h-[150px]">
          <img src={data.image}></img>
        </div>
      </div>
      <div>
        <p className="text-white font-bold">{data.name}</p>
      </div>
      <div
        onClick={() => router.push(`/collection/${data.collection}`)}
        className="text-white hover:cursor-pointer"
      >
        {data.collection}
      </div>
    </div>
  );
};

export default CardItemsNft;
