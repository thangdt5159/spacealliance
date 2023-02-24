import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Drawer from "./Drawer";

export const data = [
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

const Header = () => {
  const flag = useRef<any>(null);
  const [isInView, setIsInView] = useState<boolean>();
  const [openDrawer, setOpenDrawer] = useState<boolean>();

  const handleClick = () => {
    setOpenDrawer(!openDrawer);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsInView(entry.isIntersecting);
    });

    const flagObserverRef = flag.current;

    observer.observe(flag.current);

    return () => {
      observer.unobserve(flagObserverRef);
    };
  }, []);

  return (
    <>
      <section
        className={`absolute w-full bg-transparent text-white z-[999] transition-all duration-500 ${
          isInView ? "translate-y-0" : "-translate-y-[100px]"
        }`}
      >
        <div className="py-[25px] px-[15px] md:w-[1140px] flex justify-between">
          <Image
            src="/images/vesesLogo.png"
            alt=""
            width={200}
            height={200}
            className="mx-0 w-[180px] h-[74px] md:w-auto md:h-auto pt-2 cursor-pointer"
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
          <div
            className="mx-0 text-[25px] md:hidden"
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <div
          className="w-auto h-1 bg-white absolute bottom-0 z-[-1]"
          ref={flag}
        ></div>
      </section>
      <Drawer isOpen={openDrawer} handleClick={handleClick} />
    </>
  );
};

export default Header;
