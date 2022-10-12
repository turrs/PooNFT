import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";

const Drops = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const [loading, setLoading] = useState();
  const { GetDrops } = useContext(AppContext);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    setLoading(true);
    await GetDrops().then((res) => {
      let today = new Date().toISOString().slice(0, 10);

      let results = Object.values(res.data.result.data);

      setData([results]);
    });
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <div className="p-2">
        <div className="flex justify-center items-center bg-red border-white border-solid rounded-[10px] p-2">
          <p className="text-white">Launchpad Drops</p>
        </div>
      </div>
      <div>
        <div>
          <p className="text-white font-bold">Today</p>
        </div>
        {!loading &&
          data.map((items) =>
            items[0].map((drops) => (
              <div
                key={drops.website}
                className="p-1  hover:scale-105"
                onClick={() => openInNewTab(drops.website)}
              >
                <div className="flex flex-wrap justify-around items-center bg-purple border-red border-solid rounded-[10px] p-2">
                  <div>
                    <p className="text-white">{drops.name}</p>
                  </div>
                  <div>
                    <p className="text-gray">{drops.time}</p>
                  </div>
                </div>
              </div>
            ))
          )}
      </div>
      <div>
        <div>
          <p className="text-white font-bold">Tomorrow</p>
        </div>
        {!loading &&
          data.map((items) =>
            items[1].map((drops) => (
              <div
                key={drops.website}
                className="p-1  hover:scale-105"
                onClick={() => openInNewTab(drops.website)}
              >
                <div className="flex flex-wrap justify-around items-center bg-purple border-red border-solid  rounded-[10px] p-2">
                  <div>
                    <p className="text-white">{drops.name}</p>
                  </div>
                  <div>
                    <p className="text-gray">{drops.time}</p>
                  </div>
                </div>
              </div>
            ))
          )}
      </div>
    </div>
  );
};

export default Drops;
