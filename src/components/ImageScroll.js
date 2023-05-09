import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
const leftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "10px",
      }}
    >
      <FaArrowAltCircleLeft onClick={() => scrollPrev()} role="button" />
    </div>
  );
};
const rightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "10px",
      }}
    >
      <FaArrowAltCircleRight onClick={() => scrollNext()} role="button" />
    </div>
  );
};
const ImageScroll = ({ data }) => {
  return (
    <ScrollMenu LeftArrow={leftArrow} RightArrow={rightArrow}>
      {data.map((item) => (
        <div className="image-prev" key={item.externalID}>
          <Image
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            width={600}
            height={500}
            alt="proo"
          />
        </div>
      ))}
    </ScrollMenu>
  );
};

export default ImageScroll;
