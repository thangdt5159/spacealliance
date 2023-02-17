import { Inter } from "@next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import MainContent from "../components/mainContent/MainContent";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="text-[15px] h-screen leading-7 font-display">
      <div className="fixed transition-all duration-500 hover:-translate-y-2 w-10 h-10 bg-white rounded-full right-[15px] bottom-5 text-center cursor-pointer my-auto leading-[44px]">
        <FontAwesomeIcon icon={faAngleUp} className="text-[#191919] text-2xl" />
      </div>
      <div className="relative">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </main>
  );
}
