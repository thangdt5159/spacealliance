import Image from "next/image";
import React from "react";

const Header = () => {
  const data = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Video",
    },
    {
      id: 3,
      title: "About",
    },
    {
      id: 4,
      title: "Hero",
    },
    {
      id: 5,
      title: "Team",
    },
    {
      id: 6,
      title: "Road Map",
    },
    {
      id: 7,
      title: "Whitepaper",
    },
  ];

  return (
    <section className="absolute w-full bg-transparent text-white">
      <div className="py-[25px] px-[15px] w-[1140px] flex justify-between">
        <Image
          src="/images/vesesLogo.png"
          alt=""
          width={200}
          height={200}
          className="mx-0 w-auto h-auto pt-2"
        />
        <ul className="flex justify-between pt-2">
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
    </section>
  );
};

export default Header;
