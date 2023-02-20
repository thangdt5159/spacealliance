import Image from "next/image";
import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

const MainContent = ({ flag }: any) => {
  return (
    <section className="relative">
      <Section1 />
      <Section2 flag={flag} />
      <Section3 />
      <Section4 />
      <Section5 />
      <Image
        src="/images/header.png"
        alt=""
        width={1600}
        height={1600}
        className="w-full absolute -translate-y-1/2"
      />
      <Section6 />
      <Section7 />
    </section>
  );
};

export default MainContent;
