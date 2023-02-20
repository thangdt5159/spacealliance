import Image from "next/image";
import React from "react";

const Section6 = () => {
  const data = [
    {
      id: 1,
      name: "Name",
      title: "Founder",
      des: "A passionate creator and project founder that will accelerate the realization of GameFi",
    },
    {
      id: 2,
      name: "Name",
      title: "Business Strategist",
      des: "As the architect behind Veses, Omar oversees the holistic development and manages the missions.",
    },
    {
      id: 3,
      name: "Name",
      title: "Marketing Manager",
      des: "Leads the promotional of the programme, and go-to market strategy in GameFi ",
    },
    {
      id: 4,
      name: "Name",
      title: "Squad Leader",
      des: "Years experience in games development. He involves in the strategic expansion and community development",
    },
    {
      id: 5,
      name: "Name",
      title: "Project General",
      des: "Leads the operational of the programme, and involves in the strategic expansion and community development",
    },
    {
      id: 6,
      name: "Name",
      title: "Mad Scientist",
      des: "The engineering team and is responsible for the technical aspects of the game.",
    },
    {
      id: 7,
      name: "Name",
      title: "Art Lead",
      des: "The Art Lead. He design concepts and artistic direction of the organisation ",
    },
    {
      id: 8,
      name: "Name",
      title: "Blockchain Advisor",
      des: "Consults in the organisation growth from Nft gaming perspective",
    },
  ];

  return (
    <section className="text-white">
      <div className="bg-btmBg bg-no-repeat bg-cover bg-fixed">
        <div className="md:max-w-[1140px] pt-[30px] text-center">
          <div className="p-[10px]">
            <h3 className="text-[35px] font-medium leading-[48px] mb-5">
              The Team of <br /> <span className="text-[#B7B7B7]">Veses</span>
            </h3>
            <p className="text-[17px] mb-7 text-start md:text-center text-[#dcdcdc]">
              The team always plays an important role in the success of a
              project.
              <br />
              As a team, we have been working with each other for many years,
              with everyone being highly <br /> experienced in their own
              expertise
            </p>
            <div className="md:grid grid-cols-4">
              {data.map((item) => (
                <div key={item.id} className="p-[10px]">
                  {/* <Image
                     src=""
                     alt=""
                     width={128}
                     height={128}
                     className="bg-white rounded-[30px]"
                   /> */}
                  <div className="bg-white rounded-[30px] w-[128px] h-[128px] text-gray-400 font-semibold flex items-center justify-center">
                    128x128
                  </div>
                  <h3 className="text-[23px] leading-[48px]">{item.name}</h3>
                  <h4 className="text-[20px] leading-[49px]">{item.title}</h4>
                  <p>{item.des}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
