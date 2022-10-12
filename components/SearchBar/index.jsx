import React, { useCallback, useContext, useEffect, useState } from "react";
import { AutoComplete } from "antd";
import { AppContext } from "../../context";
const { Option } = AutoComplete;
const SearchBar = () => {
  const { GetItems } = useContext(AppContext);
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState();
  const handleSearch = async (value) => {
    setQuery(value);
    debounce(fetchData(value), 3000);
  };
  const fetchData = async (query) => {
    await GetItems(query).then((res) => {
      console.log("items res", res.data.items);
      var solArray = res.data.items.filter(function (el) {
        return el.chain === "eth";
      });
      console.log("solarray", solArray);
      let sliceArray = res.data.items.slice(0.5);
      console.log("slice array", sliceArray);
      setResult(sliceArray);
    });
  };
  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, delay);
    };
  };

  return (
    <div className="flex w-[400px]  flex-col p-4">
      <div className="">
        <input
          className="w-full p-1 rounded-xl"
          placeholder="Search Collections"
          onChange={(e) => handleSearch(e.target.value)}
        ></input>
        <div className="flex flex-col">
          {result.map((items) => (
            <div
              className="bg-purple flex flex-col  z-10 absolute p-2 rounded-xl mt-2"
              key={items.contract}
            >
              {/* <div>
                <img width={40} height={60} src={items.media}></img>
              </div> */}
              <div>{items.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
