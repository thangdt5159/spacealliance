import Image from "next/image";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

const Section2 = () => {
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="section2">
      <div className="relative p-[10px] bg-black">
        <Slider
          {...settings}
          ref={sliderRef}
          className="section2-slider cursor-grab active:cursor-grabbing"
        >
          <Image
            src="/images/veses-AMA.jpg"
            alt=""
            width={1600}
            height={800}
            className="w-full"
          />
          <Image
            src="/images/veses-overview.jpg"
            alt=""
            width={1600}
            height={800}
            className="w-full"
          />
        </Slider>
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="absolute left-6 text-white text-[25px] top-[49%] w-[25px] h-[25px] cursor-pointer"
          onClick={() => sliderRef.current.slickPrev()}
        />
        <FontAwesomeIcon
          icon={faAngleRight}
          className="absolute right-6 text-white text-[25px] top-[49%] w-[25px] h-[25px] cursor-pointer"
          onClick={() => sliderRef.current.slickNext()}
        />
      </div>
    </section>
  );
};

export default Section2;
