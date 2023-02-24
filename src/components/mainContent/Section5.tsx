import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Section5 = () => {
  const ref1 = useRef<any>(null);
  const ref2 = useRef<any>(null);
  const ref3 = useRef<any>(null);
  const [ref1InView, setRef1IsInView] = useState<boolean>();
  const [ref2InView, setRef2IsInView] = useState<boolean>();
  const [ref3InView, setRef3IsInView] = useState<boolean>();

  useEffect(() => {
    const ref1Observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setRef1IsInView(entry.isIntersecting);
      }
    });

    const ref2Observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setRef2IsInView(entry.isIntersecting);
      }
    });

    const ref3Observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setRef3IsInView(entry.isIntersecting);
      }
    });

    const ref1ObserverRef = ref1.current;
    const ref2ObserverRef = ref2.current;
    const ref3ObserverRef = ref3.current;

    ref1Observer.observe(ref1.current);
    ref2Observer.observe(ref2.current);
    ref3Observer.observe(ref3.current);

    return () => {
      ref1Observer.unobserve(ref1ObserverRef);
      ref2Observer.unobserve(ref2ObserverRef);
      ref3Observer.unobserve(ref3ObserverRef);
    };
  }, []);

  return (
    <section className="text-white text-center">
      <div className="bg-section5Bg11 bg-no-repeat bg-cover bg-center md:h-screen">
        <div className="bg-section5Bg12 bg-no-repeat md:bg-contain bg-cover md:bg-left bg-center h-full">
          <div className="md:max-w-[1140px] h-full flex items-center">
            <div className="flex items-center w-full">
              <div className="w-1/2 h-full hidden md:block"></div>
              <div
                className={`md:w-1/2 h-full bg-[#00000057] rounded-[10px] md:scale-[1.198] transition-all duration-1000 ${
                  ref1InView
                    ? "md:translate-x-0 opacity-100"
                    : "md:translate-x-[150px] opacity-0"
                }`}
                ref={ref1}
              >
                <h3 className="text-[43px] font-bold pt-4 pb-[10px] leading-[2]">
                  Summoner<span> | </span>
                  <span className="text-[#aebcb9] relative before:z-[-1] before:absolute before:top-1/2 before:bottom-1/2 before:scale-[1.1] before:rounded-full before:h-[3px] before:w-full before:bg-[#FFC800]">
                    NAMAKO
                  </span>
                </h3>
                <p className="m-[15px] text-[30px] font-bold leading-9">
                  &quot;Even if I had to steal and destroy things others hold
                  dear, I&apos;m going to bring joy to you!&quot;
                </p>
                <Image
                  src="/images/header.png"
                  alt=""
                  width={600}
                  height={500}
                  className="w-full mt-5"
                />
                <p className="text-start p-[40px]">
                  Although she acted moronic and violent during her
                  introduction, she is actually quite cunning in staging the
                  whole war faction in the Veses verse.
                </p>
                <Image
                  src="/images/header.png"
                  alt=""
                  width={600}
                  height={500}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-section5Bg21 bg-no-repeat bg-cover bg-center md:h-screen">
        <div className="bg-section5Bg22 bg-no-repeat md:bg-contain bg-cover md:bg-right bg-center h-full">
          <div className="md:max-w-[1140px] h-full flex items-center">
            <div className="flex items-center w-full">
              <div
                className={`md:w-1/2 h-full bg-[#00000057] rounded-[10px] md:scale-[1.198] transition-all duration-1000 ${
                  ref2InView
                    ? "md:translate-x-0 opacity-100"
                    : "md:-translate-x-[150px] opacity-0"
                }`}
                ref={ref2}
              >
                <h3 className="text-[43px] font-bold pt-4 pb-[10px] leading-[2]">
                  Gunner<span> | </span>
                  <span className="text-[#aebcb9] relative before:z-[-1] before:absolute before:top-1/2 before:bottom-1/2 before:scale-[1.1] before:rounded-full before:h-[3px] before:w-full before:bg-red-500">
                    KANE
                  </span>
                </h3>
                <p className="m-[15px] text-[30px] font-bold leading-9">
                &quot;Yo Adventurer! Let&apos;s explore the world of excitements
                  together!&quot;
                </p>
                <Image
                  src="/images/header.png"
                  alt=""
                  width={600}
                  height={500}
                  className="w-full mt-5"
                />
                <p className="text-start p-[40px]">
                  Kane is proficient with a variety of range weapons. Due to his
                  solitary past, he have strong determination and sense of duty.
                </p>
                <Image
                  src="/images/header.png"
                  alt=""
                  width={600}
                  height={500}
                  className="w-full"
                />
              </div>
              <div className="w-1/2 h-full hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-section5Bg31 bg-no-repeat bg-cover bg-center md:h-screen">
        <div className="bg-section5Bg32 bg-no-repeat md:bg-contain bg-cover md:bg-left bg-center h-full">
          <div className="md:max-w-[1140px] h-full flex items-center">
            <div className="flex items-center w-full">
              <div className="w-1/2 h-full hidden md:block"></div>
              <div
                className={`md:w-1/2 h-full bg-[#00000057] rounded-[10px] md:scale-[1.198] transition-all duration-1000 ${
                  ref3InView
                    ? "md:translate-x-0 opacity-100"
                    : "md:translate-x-[150px] opacity-0"
                }`}
                ref={ref3}
              >
                <h3 className="text-[43px] font-bold pt-4 pb-[10px] leading-[2]">
                  Sword Master<span> | </span>
                  <span className="text-[#aebcb9] relative before:z-[-1] before:absolute before:top-1/2 before:bottom-1/2 before:scale-[1.1] before:rounded-full before:h-[3px] before:w-full before:bg-[#6EC1E4]">
                    Pela
                  </span>
                </h3>
                <p className="md:m-[15px] text-[30px] font-bold leading-9">
                &quot;Get on your knees adventurer! I am the Queen of the street!&quot;
                </p>
                <Image
                  src="/images/header.png"
                  alt=""
                  width={600}
                  height={500}
                  className="w-full mt-5"
                />
                <p className="text-start p-[40px]">
                  A beautiful young woman that her beauty attracts numerous men.
                  It also causes opponents to heavily underestimate Pela’s
                  combat skills and cunning, thus causing opponents to gang up
                  on Pela and getting outsmart by her in the process
                </p>
                <Image
                  src="/images/header.png"
                  alt=""
                  width={600}
                  height={500}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
