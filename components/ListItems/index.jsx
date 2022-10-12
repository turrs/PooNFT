import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";

const ListItems = ({ data }) => {
  console.log(99999, data);
  const router = useRouter();
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div>
      {data.me_key !== undefined ? (
        <div
          className="pt-2 hover:scale-105"
          onClick={
            data.me_key === ""
              ? () => openInNewTab("https://magiceden.io/")
              : () => router.push(`/collection/${data.me_key}`)
          }
        >
          <div className="flex border-white border-solid  rounded-[10px] p-2 ">
            <div className="w-4/12 flex justify-center items-center">
              <img
                alt={data.tokenMint}
                src={`https://howrare.is/${data.logo}`}
                width={80}
                height={60}
              />
            </div>

            <div className="w-4/12 flex justify-center items-center">
              <p className="text-red">{data.name}</p>
            </div>
            <div className="w-4/12 flex justify-center items-center">
              <p className="text-white">{data.floor}</p>
            </div>
            <div className="w-4/12 flex justify-center items-center">
              <p className="text-green">{data.items}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ListItems;
