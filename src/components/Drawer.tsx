import React from "react";
import { data } from "./Header";

const Drawer = ({ isOpen, handleClick, closeDrawer }: any) => {
  return (
    <>
      <>
        <section
          className={`bg-white h-screen w-[65%] fixed right-0 top-0 md:hidden transition-all duration-500 z-[9999] ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-[100%] opacity-0"
          }`}
        >
          <div className="p-[10px] mb-6 relative" onClick={handleClick}>
            <div className="absolute right-4 top-7 w-5 h-[2px] bg-[#6a7c92] rotate-45"></div>
            <div className="absolute right-4 top-7 w-5 h-[2px] bg-[#6a7c92] -rotate-45"></div>
          </div>
          {data.map((item) => (
            <div
              key={item.id}
              className="uppercase border-b border-[rgba(106, 124, 146, 0.10)] py-[10px] pl-[15px] text-[#6a7c92]"
            >
              {item.title}
            </div>
          ))}
        </section>
        <div
          className={`bg-black/60 w-full h-screen fixed top-0 bottom-0 left-0 right-0 transition-all duration-500 md:hidden ${
            isOpen ? "opacity-100 z-[9998]" : "opacity-0 z-[-1]"
          }`}
          onClick={handleClick}
        ></div>
      </>
    </>
  );
};

export default Drawer;
