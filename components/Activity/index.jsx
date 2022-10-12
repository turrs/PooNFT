import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";

const Activity = ({ symbol }) => {
  const { GetActivity } = useContext(AppContext);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const fetchData = async (symbol) => {
    console.log("render");
    setLoading(true);
    await GetActivity(symbol).then((res) => {
      console.log(11121, res.data);

      setData(res.data);
    });
    setLoading(false);
  };
  useEffect(() => {
    setTimeout(() => {
      fetchData(symbol);
    }, 3000);
  }, [symbol]);
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="">
      <div className="p-2">
        <div className="flex justify-center items-center bg-red border-white border-solid border-2 rounded-[10px] p-2">
          <p className="text-white">Activity</p>
        </div>
      </div>

      {!loading &&
        data.map((items) => (
          <div
            className="p-1  hover:scale-105"
            key={items.signature}
            onClick={() =>
              openInNewTab(`https://solscan.io/tx/${items.signature}`)
            }
          >
            <div className="flex flex-wrap justify-around items-center bg-purple border-red border-solid border-2 rounded-[10px] p-2">
              <div>
                <img width={60} height={40} src={items.image}></img>
              </div>
              <div>
                <p className="text-white">{items.type}</p>
                <p className="text-white">{items.price}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Activity;
