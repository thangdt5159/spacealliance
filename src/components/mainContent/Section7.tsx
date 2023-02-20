import Image from "next/image";
import React from "react";

const Section7 = () => {
  return (
    <section>
      <div className="bg-btmBg bg-no-repeat bg-cover bg-fixed">
        <div className="md:max-w-[1140px] text-white text-center">
          <h3 className="text-[35px] font-medium leading-[48px] mb-5 pt-10 md:pt-0">
            Roadmap
          </h3>
          <Image
            src="/images/roadmap.png"
            alt=""
            width={800}
            height={800}
            className="w-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Section7;
