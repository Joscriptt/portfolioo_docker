import Link from "next/link";
import React from "react";
import { TbArrowBackUp, TbBrandVscode } from "react-icons/tb";
import {
  SiNotion,
  SiAdobeaftereffects,
  SiFigma,
  SiSpotify,
  SiDiscord,
  SiGooglechrome,
} from "react-icons/si";
import Image from "next/image";

function Aboutpage() {
  return (
    <div>
      <div className="relative max-w-5xl mx-auto px-8">
        <div className="relative mt-14">
          <h2 className="text-xl text-center dark:text-neutral-400 font-InterBold uppercase ">
            About me
          </h2>
          <Link href={"/"}>
            <div className=" bg-neutral-700/10 rounded-md absolute -top-1  w-12 h-8 flex  items-center justify-center ">
              <TbArrowBackUp className="dark:text-white  text-black text-xl" />
            </div>
          </Link>
        </div>

        <div className="mt-10">
          <Image
            width={"100%"}
            height={"384px"}
            className="w-full h-96 rounded-lg object-cover"
            src="img/img6.jpg"
            alt=""
          />
          <h4 className="my-11 font-InterBold">How it all started</h4>

          <p className="my-9">
            Exploring different fields during my first year of college, coding
            quickly caught my attention. But navigating clubs during the
            pandemic was tough. Luckily, I joined a club with friends and my
            design journey began with Figma. Despite struggling with other
            software, Figma's intuitive interface made me fall in love with
            design. I learned the importance of portfolios and case studies,
            which led to my first internship and valuable experience. Taking a
            reflective break, I joined 10kdesigners to continue growing my
            skills and passion for design.
          </p>

          <h4 className="my-10 font-InterBold">What’s to come</h4>

          <p className="my-10">
            As an engineer, I have a strong passion for technology and I'm
            always on the lookout for the latest developments and trends. I'm
            particularly interested in exploring how design can be integrated
            with AI to create even better user experiences. In the future, I
            hope to continue pushing the boundaries of design and technology,
            and to use my skills to create innovative solutions that make a real
            impact. I'm excited to see where this journey takes me, and I look
            forward to sharing my experiences and insights along the way. Till
            then keep iterating!
          </p>

          <h4 className="font-InterBold">My Stack</h4>

          <div className="flex gap-x-8 justify-around  mt-16">
            <SiNotion className="text-2xl" />
            <SiAdobeaftereffects className="text-[#00005F] text-2xl" />
            <SiFigma className="text-[#00BDFD] text-2xl" />
            <SiSpotify className="text-[#00DA4C] text-2xl" />
            <SiDiscord className="text-[#5264FA] text-2xl" />
            <SiGooglechrome className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
