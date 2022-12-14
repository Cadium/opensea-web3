/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoMdSnow } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

const styles = {
  topBar: `bg-[#303339] p-2 rounded-t-lg border-[#151c22] border`,
  topBarContent: `flex items-center`,
  likesCounter: `flex-1 flex items-center justify-end`,
};

const NFTImage = ({ selectedNft }) => {
  return (
    <div>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <IoMdSnow />
          <div className={styles.likesCounter}>
            <AiOutlineHeart />
            2.3K
          </div>
        </div>
      </div>
      <div>
        {console.log(selectedNft, "🎆")}
        <img src={selectedNft?.image} />
      </div>
    </div>
  );
};

export default NFTImage;
