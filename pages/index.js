import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { useWeb3 } from "@3rdweb/hooks";
import { useEffect } from "react";
import { client } from "../lib/sanityClient";
import toast, { Toaster } from "react-hot-toast";

const styles = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
};

export default function Home() {
  const { address, connectWallet } = useWeb3();

  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back${userName !== "Unnamed" ? ` ${userName}` : ""}!`,
      {
        style: {
          background: "#04111d",
          color: "#fff",
        },
      }
    );
  };

  useEffect(() => {
    if (!address) return;
    (async () => {
      const userDoc = {
        _type: "users",
        _id: address,
        userName: "Unnamed",
        walletAddress: address,
      };

      const result = await client.createIfNotExists(userDoc);

      welcomeUser(result.userName);
    })();
  }, [address]);

  // IIFE
  // Immediately invoked functional expressions

  return (
    <div className={styles.wrapper}>
      <Toaster position="top-center" reverseOrder={false} />
      {address ? (
        <>
          <Header />
          <Hero />
        </>
      ) : (
        <div className={styles.walletConnectWrapper}>
          <button
            className={styles.button}
            onClick={() => connectWallet("injected")}
          >
            Connect Wallet
          </button>
          <div className={styles.details}>
            You need the Chrome browser
            <br /> to run this app.
          </div>
        </div>
      )}
    </div>
  );
}
