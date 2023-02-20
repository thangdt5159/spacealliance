import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { data } from "../Header";

const Section2 = ({ flag }: any) => {
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
      <div
        className={`bg-[#1a1a1a] md:w-full h-[100px] fixed top-0 transition-all duration-500 hidden ${
          flag
            ? "translate-y-[0] opacity-100 z-[999]"
            : "-translate-y-[100px] opacity-0 z-[-1]"
        }`}
      >
        <div className="py-[10px] px-[15px] w-full md:w-[1140px] flex justify-between text-[#EAE0BB]">
          <Image
            src="/images/vesesLogo.png"
            alt=""
            width={200}
            height={200}
            className="mx-0 w-auto h-auto pt-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          <ul className="hidden md:flex justify-between pt-2">
            {data.map((item) => (
              <li
                key={item.id}
                className="mr-[38px] last-of-type:mr-0 cursor-pointer"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative p-[10px] bg-black">
        <Slider
          {...settings}
          ref={sliderRef}
          className="section2-slider cursor-grab active:cursor-grabbing h-full"
        >
          <Image
            src="/images/veses-AMA.jpg"
            alt=""
            width={1600}
            height={800}
            className="w-full h-screen object-cover"
          />
          <Image
            src="/images/veses-overview.jpg"
            alt=""
            width={1600}
            height={800}
            className="w-full h-screen object-cover"
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
