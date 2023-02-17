import Image from "next/image";
import React from "react";

const Section4 = () => {
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

  return (
    <section>
      <div className="bg-section4Bg bg-no-repeat bg-right-top bg-cover w-full h-screen">
        <div className="bg-section4CharBg bg-no-repeat bg-center bg-cover bg-fixed w-full h-full">
          <div className="max-w-[1140px] h-full relative flex flex-col justify-center text-white">
            <div className="bg-[#1B1B1BCC] text-[40px] leading-[48px] font-bold p-[10px] border-l-[3px] border-[#6ec1e4] mr-[10px] my-[10px]">
              World Of Veses
            </div>
            <div className="bg-[#000000CF]">
              <p className="p-5 text-end">
                Veses is an independent free-to-play online Nft action adventure
                featuring cyberpunk-inspired theme. Powered by the BNB Chain,
                Veses gives you complete ownership over your in-game
                collectibles. Collect rare hero, create your own Nfts, build
                your skill, battle with other players and sell items to other
                traders.
              </p>
              <div className="flex justify-between items-center gap-5 mt-5 text-center p-[10px]">
                {data.map((item) => (
                  <div key={item.id} className="w-1/4">
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
