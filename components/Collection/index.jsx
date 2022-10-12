import HeadCollectionList from "../HeadCollectionList";
import HeadList from "../HeadList";
import ListItems from "../ListItems";
import SearchBar from "../SearchBar";
import { Avatar, Divider, List, Skeleton } from "antd";
import React, { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { AppContext } from "../../context";
import { useRouter } from "next/router";
import ListCollection from "../ListCollection";

const ScrollListItems = ({ collection }) => {
  console.log("msuk kah1", collection);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { GetCollectionListings, setCollection, offset, setOffset } =
    useContext(AppContext);

  const loadMoreData = async (collection, offset) => {
    console.log("msukkah 22", collection);
    if (loading) {
      return;
    }

    setLoading(true);
    await GetCollectionListings(collection, offset)
      .then((res) => {
        console.log(res.data);
        setData([...data, ...res.data]);

        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const router = useRouter();
  useEffect(() => {
    console.log("render");
    loadMoreData(collection, offset);
  }, []);

  return (
    <div
      id="scrollableDiv"
      style={{
        height: 600,
        overflow: "auto",
        padding: "0 16px",
        border: "1px solid rgba(140, 140, 140, 0.35)",
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={() => loadMoreData(collection, offset)}
        hasMore={data.length < 50000}
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
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.tokenMint}>
              <ListCollection data={item} />
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
const Collection = ({ collection, data }) => {
  console.log("msuk kah", collection);
  useEffect(() => {}, collection);
  return (
    <div>
      <HeadCollectionList data={data} />
      <div>
        <HeadList />
      </div>
      <div className="flex flex-row w-full"></div>
      <div>
        <ScrollListItems collection={collection} />
      </div>
    </div>
  );
};

export default Collection;
