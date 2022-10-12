import React, { FC, useContext, useEffect, useMemo, useState } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { AppContext } from "../../context";
import { Tabs } from "antd";
import CardItemsNft from "../CardItemsNft";

const MyDashboard = () => {
  const { address, GetTokenWallet } = useContext(AppContext);
  const { connection } = useConnection();
  const [data, setData] = useState();
  const wallet = useWallet();
  const fetchData = async (address) => {
    await GetTokenWallet(address).then((res) => {
      console.log(1111999, res);
      setData(res.data);
    });
  };
  useEffect(() => {
    if (wallet.publicKey) {
      fetchData(wallet.publicKey);
      console.log("nih adress", address);
    }
  }, [address, wallet.publicKey, connection]);

  return (
    <div>
      <div className="flex overflow-auto overflow-scroll scrollbar-hide  h-[800px]">
        {data === undefined ? (
          <div className="flex justify-center ">
            <p className="text-white">Please connect wallet</p>{" "}
          </div>
        ) : (
          <div>
            <div className="flex flex-row flex-wrap justify-center ">
              {data.map((items) => (
                <CardItemsNft key={items.name} data={items} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyDashboard;
