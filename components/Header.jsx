/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import openseaLogo from "../assets/opensea.png";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const Header = () => {
  const styles = {
    wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex `,
    logoContainer: `flex items-center cursor-pointer`,
    logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
    searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    headerItems: ` flex items-center justify-end`,
    headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
    headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
  };
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <Image src={openseaLogo} height={40} width={40} />
          <div className={styles.logoText}>Opensea</div>
        </div>
      </Link>
      <div className={styles.searchBar}>
        <div className={styles.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input
          className={styles.searchInput}
          placeholder="Search items, collections, and accounts"
        />
      </div>
      <div className={styles.headerItems}>
        <Link href="/collections/0xdd268d0611F19A6dFB52dFA376C0aAFB7c6482bE">
          <div className={styles.headerItem}>Collections</div>
        </Link>
        <div className={styles.headerItem}>Stats</div>
        <div className={styles.headerItem}>Resources</div>
        <div className={styles.headerItem}>Create</div>
        <div className={styles.headerIcon}>
          <CgProfile />
        </div>
        <div className={styles.headerIcon}>
          <MdOutlineAccountBalanceWallet />
        </div>
      </div>
    </div>
  );
};

export default Header;
