import React, { FC, useContext, useEffect, useMemo } from "react";
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
const ConnectToWallet = () => {
  const { connection } = useConnection();
  const wallet = useWallet();
  const { setAdress } = useContext(AppContext);
  const fetchWallet = async () => {
    const adress = wallet.publicKey.toBase58();
    console.log("ini public key", adress);
    await setAdress(adress);
  };

  useEffect(() => {
    if (wallet.publicKey) {
      fetchWallet();
    }
  }, [wallet.publicKey, connection]);
  return (
    <div className="  flex justify-center items-center">
      <WalletMultiButton
        className="w-[150px] md:w-full"
        style={{
          backgroundColor: "#FE2C55",
          borderRadius: 10,
        }}
      />
    </div>
  );
};

export default ConnectToWallet;
