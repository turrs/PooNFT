import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import {
  Activity,
  Collection,
  Content,
  Drops,
  Footer,
  Headers,
  HeadList,
  Search,
  SearchBar,
  Sidebar,
} from "../../components";
import { AppContext } from "../../context";

export default function Slug() {
  const navigate = useRouter();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [collection, setCollection] = useState();
  const { GetStatsCollection } = useContext(AppContext);
  const fetchStats = async (symbol) => {
    await GetStatsCollection(symbol).then((res) => {
      setData(res);
    });
  };
  useEffect(() => {
    if (!navigate.isReady) {
      setLoading(true);
    }
    if (navigate.isReady) {
      fetchStats(navigate.query.slug);
      setCollection(navigate.query.slug);
      setLoading(false);
    }
  }, [navigate.isReady]);
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="h-[100vh] bg-black">
        <Headers />
        <div className="bg-black flex ">
          <div className="w-3/12 p-3">
            <Sidebar />
          </div>
          <div className="w-6/12 p-3">
            {!loading && data !== undefined && (
              <Collection collection={collection} data={data} />
            )}
          </div>
          <div className="w-3/12 p-3">
            {navigate.query.slug !== undefined && (
              <Activity symbol={navigate.query.slug} />
            )}
          </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
}
