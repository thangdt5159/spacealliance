import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Section4 = () => {
  const titleRef = useRef<any>(null);
  const itemRef = useRef<any>(null);

  const [titleInView, setTitleInView] = useState<boolean>();
  const [itemInView, setItemInView] = useState<boolean>();

  const data = [
    {
      id: 1,
      image: "/images/spaceship.png",
      title: "Explore",
      des: "Explore the land of possibility",
    },
    {
      id: 2,
      image: "/images/credits.png",
      title: "Land",
      des: "Collect material & build your world",
    },
    {
      id: 3,
      image: "/images/craft.png",
      title: "Craft",
      des: "Hunt & produce NFT item",
    },
    {
      id: 4,
      image: "/images/cargo.png",
      title: "Earn",
      des: "Win reward & trade",
    },
  ];

  useEffect(() => {
    const titleObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setTitleInView(entry.isIntersecting);
      }
    });

    const itemObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setItemInView(entry.isIntersecting);
      }
    });

    titleObserver.observe(titleRef.current);
    itemObserver.observe(itemRef.current);

    return () => {
      titleObserver.unobserve(titleRef.current);
      itemObserver.unobserve(itemRef.current);
    };
  }, []);

  return (
    <section>
      <div className="bg-section4Bg bg-no-repeat bg-right-top bg-cover md:w-full min-h-screen">
        <div className="bg-section4CharBg bg-no-repeat bg-center bg-cover bg-fixed md:w-full h-full">
          <div className="md:max-w-[1140px] h-full relative flex flex-col justify-center text-white">
            <div
              className={`bg-[#1B1B1BCC] text-[40px] leading-[48px] font-bold p-[10px] border-l-[3px] border-[#6ec1e4] mr-[10px] my-[10px] transition-all duration-1000 ${
                titleInView
                  ? "md:translate-x-0 md:opacity-100"
                  : "md:translate-x-[300px] md:opacity-0"
              }`}
              ref={titleRef}
            >
              World Of Veses
            </div>
            <div className="bg-[#000000CF]" ref={itemRef}>
              <p
                className={`p-5 text-end transition-all duration-1000 ${
                  itemInView
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-[100px] opacity-0"
                }`}
              >
                Veses is an independent free-to-play online Nft action adventure
                featuring cyberpunk-inspired theme. Powered by the BNB Chain,
                Veses gives you complete ownership over your in-game
                collectibles. Collect rare hero, create your own Nfts, build
                your skill, battle with other players and sell items to other
                traders.
              </p>
              <div className="md:flex justify-between items-center gap-5 mt-5 text-center p-[10px]">
                {data.map((item) => (
                  <div
                    key={item.id}
                    className={`md:w-1/4 mb-4 transition-all duration-1000 ${
                      itemInView
                        ? "translate-y-0 opacity-100"
                        : "translate-y-[100px] opacity-0"
                    } ${
                      item.id === 2
                        ? "delay-150"
                        : item.id === 3
                        ? "delay-300"
                        : item.id === 4
                        ? "delay-[450ms]"
                        : ""
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt=""
                      width={120}
                      height={120}
                      className="w-auto h-[100px] mb-5 transition-all duration-300 hover:scale-110"
                    />
                    <h3 className="text-[32px] font-semibold mb-[15px] leading-10">
                      {item.title}
                    </h3>
                    <p>{item.des}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
