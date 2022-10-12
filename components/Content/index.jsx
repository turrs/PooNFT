import { useRouter } from "next/router";
import ListItems from "../ListItems";
import { Avatar, Divider, List, Skeleton } from "antd";
import React, { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { AppContext } from "../../context";

const ScrollListItems = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { GetCollection, collection } = useContext(AppContext);
  const [sliceData, setSliceData] = useState([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    if (data.length === sliceData.length) {
      setLoading(true);
      GetCollection()
        .then((res) => {
          setData([...data, ...res.result.data]);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
    setLoading(true);
    var hasil = data.slice(sliceData.length, sliceData.length + 10);

    setSliceData([
      ...sliceData,
      ...data.slice(sliceData.length, sliceData.length + 10),
    ]);

    setLoading(false);
  };

  useEffect(() => {
    loadMoreData();
  }, [data]);
  return (
    <div
      id="scrollableDiv"
      style={{
        height: 650,
        overflow: "auto",
        padding: "0 16px",
        border: "1px solid rgba(140, 140, 140, 0.35)",
      }}
    >
      <InfiniteScroll
        dataLength={sliceData.length}
        next={loadMoreData}
        hasMore={sliceData.length < 60000}
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={sliceData}
          renderItem={(item) =>
            item.me_key !== undefined && (
              <List.Item key={item.symbol}>
                <ListItems data={item} />
              </List.Item>
            )
          }
        />
      </InfiniteScroll>
    </div>
  );
};
const Content = () => {
  const router = useRouter();
  const onCollection = () => {
    var symbol = "smb";
    router.push(`/collection/${symbol}`);
  };
  return (
    <div className="flex flex-col ">
      <div className="flex border-gray border-solid border-2 rounded-[10px] p-2 ">
        <div className="w-4/12 flex justify-center items-center">
          <p className="text-gray font-['Poppins']">Image</p>
        </div>
        <div className="w-4/12 flex justify-center items-center">
          <p className="text-gray font-['Poppins']">Name</p>
        </div>
        <div className="w-4/12 flex justify-center items-center">
          <p className="text-gray font-['Poppins']">Floor</p>
        </div>
        <div className="w-4/12 flex justify-center items-center">
          <p className="text-gray font-['Poppins']">Total Supply</p>
        </div>
      </div>
      <div className="p-2">
        <ScrollListItems />
      </div>
    </div>
  );
};

export default Content;
