import React from "react";

const HeadCollectionList = ({ data }) => {
  console.log(12121213, data);
  return (
    <div className="flex flex-col md:flex-row rounded-[10px] p-2 ">
      <div className="md:w-6/12 flex  ">
        <div>
          <p className="text-white font-['Poppins'] font-bold text-xl">
            {data[1].data.name}
          </p>
          <div>
            <span className="text-white text-sm md:max-w-[10px] max-w-[100px]">
              {data[1].data.description}
            </span>
          </div>
        </div>
      </div>
      <div className="md:w-3/12 flex flex-col justify-center items-center m-1">
        <div className="flex flex-row flex-wrap justify-around items-center bg-purple rounded-[10px] w-full p-2 m-1">
          <div>
            <p className="text-white font-bold">Floor</p>
          </div>
          <div>
            <p className="text-gray">{data[0].data.floorPrice}</p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-around items-center bg-purple rounded-[10px] w-full p-2 m-1">
          <div>
            <p className="text-white font-bold">Avg. Sale (24hr)</p>
          </div>
          <div>
            <p className="text-gray">{data[0].data.avgPrice24hr}</p>
          </div>
        </div>
      </div>
      <div className="md:w-3/12 flex  flex-col justify-center items-center  m-1">
        <div className="flex flex-row flex-wrap justify-around items-center bg-purple rounded-[10px] w-full p-2 m-1">
          <div>
            <p className="text-white font-bold">Volume All</p>
          </div>
          <div>
            <p className="text-gray">{data[0].data.volumeAll}</p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-around items-center bg-purple rounded-[10px] w-full p-2 m-1">
          <div>
            <p className="text-white font-bold">Total Listed</p>
          </div>
          <div>
            <p className="text-gray">{data[0].data.listedCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadCollectionList;
