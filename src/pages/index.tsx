import { Inter } from "@next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import MainContent from "../components/mainContent/MainContent";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const flag = useRef<any>(null);
  const [isInView, setIsInView] = useState<boolean>();

  useEffect(() => {
    const flag1Observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsInView(entry.isIntersecting);
    });

    flag1Observer.observe(flag.current);

    return () => flag1Observer.unobserve(flag.current);
  }, []);

  return (
    <main className="text-[15px] h-screen leading-7 font-display">
      {/* <div
        className={`fixed transition-all duration-500 hover:-translate-y-2 w-10 h-10 bg-white rounded-full right-[15px] bottom-5 text-center cursor-pointer my-auto leading-[44px] z-[1000] ${
          isInView ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FontAwesomeIcon icon={faAngleUp} className="text-[#191919] text-2xl" />
      </div> */}
      <div className="relative">
        <Header />
        <div>
          <MainContent flag={isInView} />
          <div
            className="w-auto h-[82%] absolute z-[-1] bg-white top-[18%]"
            ref={flag}
          ></div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
