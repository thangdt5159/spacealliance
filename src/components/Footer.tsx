import Image from "next/image";
import React from "react";

const Footer = () => {
  const data = [
    {
      id: 1,
      title: "Privacy Policy",
    },
    {
      id: 2,
      title: "Whitepaper",
    },
    {
      id: 3,
      title: "Business Inquires",
    },
    {
      id: 4,
      title: "Terms & Conditions",
    },
    {
      id: 5,
      title: "Pinksale",
    },
    {
      id: 6,
      title: "Talk to Us",
    },
  ];

  return (
    <section>
      <div className="bg-btmBg bg-no-repeat bg-cover bg-fixed text-white pb-[30px] pt-[75px]">
        <div className="md:max-w-[1140px] md:flex">
          <div className="p-[10px] pr-4">
            <Image
              src="/images/vesesLogo.png"
              alt=""
              width={400}
              height={400}
              className="mx-0 w-full h-auto pt-2"
            />
            <h4 className="text-center font-semibold">Join The Community</h4>
          </div>
          <div>
            <h5 className="text-[13px] font-semibold text-center">Resources</h5>
            <div className="flex flex-wrap gap-4">
              {data.map((item) => (
                <div key={item.id} className="w-1/3 cursor-pointer">
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
