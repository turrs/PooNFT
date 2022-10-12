import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SlopeWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import React, { createContext, useContext, useMemo, useState } from "react";
import { MagicEdenAxios } from "../axios";
import { HowRareAxios } from "../axios";
export const AppContext = createContext(null);

export const ContexWrapper = ({ children }) => {
  const network = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [
    new PhantomWalletAdapter(),
    new SlopeWalletAdapter(),
  ]);
  const [collection, setCollection] = useState();
  const [offset, setOffset] = useState(0);
  const [address, setAdress] = useState();
  const GetCollection = async () => {
    try {
      const response = await HowRareAxios.get(`/collections`);

      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
  const GetCollectionStats = async (name) => {
    try {
      const response = await HowRareAxios.get(`/collections/${name}`);

      return response;
    } catch (err) {
      console.log(err);
    }
  };
  const GetCollectionListings = async (name, offset) => {
    try {
      const response = await MagicEdenAxios.get(
        `/collections/${name}/listings?offset=${offset}&limit=20`
      );
      setOffset(offset + 1);
      return response;
    } catch (err) {
      console.log(err);
    }
  };
  const GetStatsCollection = async (symbol) => {
    try {
      const stats = MagicEdenAxios.get(`/collections/${symbol}/stats`);
      const detail = MagicEdenAxios.get(`/collections/${symbol}`);
      const response = await Promise.all([stats, detail]);
      return response;
    } catch (err) {
      console.log(err);
    }
  };
  const GetDrops = async () => {
    try {
      const response = await HowRareAxios.get("/drops");
      return response;
    } catch (err) {
      console.log(err);
    }
  };
  const GetActivity = async (symbol) => {
    try {
      const response = await MagicEdenAxios.get(
        `/collections/${symbol}/activities?offset=0&limit=5`
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  };
  const GetTokenWallet = async (address) => {
    try {
      const response = await MagicEdenAxios.get(
        `/wallets/${address}/tokens?offset=0&limit=500&listStatus=both`
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  };
  const GetItems = async (query) => {
    try {
      const response = await MagicEdenAxios.get(
        `xc/collections/search-items/${query}`
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ConnectionProvider endpoint={endpoint}>
      <AppContext.Provider
        value={{
          GetCollection,
          GetCollectionStats,
          GetCollectionListings,
          collection,
          setCollection,
          offset,
          setOffset,
          GetDrops,
          GetStatsCollection,
          GetActivity,
          GetTokenWallet,
          address,
          setAdress,
          GetItems,
        }}
      >
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>{children}</WalletModalProvider>
        </WalletProvider>
      </AppContext.Provider>
    </ConnectionProvider>
  );
};
