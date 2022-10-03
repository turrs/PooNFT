import React from "react";
import HeadCollectionList from "../HeadCollectionList";
import HeadList from "../HeadList";
import ListItems from "../ListItems";

const Collection = () => {
  return (
    <div>
      <HeadCollectionList />
      <div>
        <HeadList />
      </div>
      <div>
        <ListItems></ListItems>
      </div>
    </div>
  );
};

export default Collection;
