import Image from "next/image";
import React from "react";
import StyleFeatured from "../styles/StyleFeatured";

const Featured = () => {
  const images = [
    { src: "featured" },
    { src: "featured2" },
    { src: "featured3" },
  ];

  return (
    <StyleFeatured>
      <div className="arrowContainer" style={{ left: 0 }}>
        <Image src="/img/arrowl.png" alt="arrowl.png" layout="fill" />
      </div>
      <div className="wrapper">
        {images.map((item, i) => (
          <div className="imgContainer" key={i}>
            <Image
              src={`/img/${item.src}.png`}
              alt={`${item.src}`}
              layout="fill"
            />
          </div>
        ))}
      </div>
      <div className="arrowContainer" style={{ right: 0 }}>
        <Image src="/img/arrowr.png" alt="arrowr.png" layout="fill" />
      </div>
    </StyleFeatured>
  );
};

export default Featured;
