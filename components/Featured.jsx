import Image from "next/image";
import React from "react";
import StyleFeatured from "../styles/StyleFeatured";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const Featured = () => {
  const images = [
    { src: "featured" },
    { src: "featured2" },
    { src: "featured3" },
  ];

  return (
    <StyleFeatured>
      <div className="wrapper">
        <div className="arrow-container custom-prev" style={{ left: 0 }}>
          <Image
            src="/img/arrowl.png"
            alt="arrowl.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <Swiper
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          loop={true}
          className="swiper"
        >
          {images.map((item, i) => (
            <SwiperSlide className="img-container" key={i}>
              <Image
                src={`/img/${item.src}.png`}
                alt={`${item.src}`}
                layout="fill"
                objectFit="contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="arrow-container custom-next" style={{ right: 0 }}>
          <Image
            src="/img/arrowr.png"
            layout="fill"
            alt="arrowr.png"
            objectFit="contain"
          />
        </div>
      </div>
    </StyleFeatured>
  );
};

export default Featured;
