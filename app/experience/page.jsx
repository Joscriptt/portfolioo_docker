"use client";

import React, { useState } from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { PiLockThin } from "react-icons/pi";
import Link from "next/link";
import { motion } from "framer-motion";

let link = [
  {
    date: "Dec 2022 - Apr 2023",
    imgLink: "/img/img6.jpg",
    title: "Product Design Intern",
    sub: "Avalon Scenes",
    subTitle:
      "At Scenes, we were building an all-in-one community platform that enables creators to connect & manage their community better.",
    bttn: "View my work",
  },
  {
    date: "Jul 2022 - Sep 2022",
    imgLink: "/img/img3.jpg",
    title: "Designer in Residence",
    sub: "10kdesigners",
    subTitle:
      "Design cohort run by Abhinav Chikara (aka Abnux) and Jayneil Dayal, that empowers designers through mentorship and real-world projects.",
  },

  {
    date: "Jan 2022 - Mar 2022",
    imgLink: "/img/img2.jpg",
    title: "Product Design Intern",
    sub: "Dive",
    subTitle:
      "I built and facilitated engaging remote experiences, connecting colleagues at work. I designed various games, including 'Word Pirate,' which became one of the platform's most-played games within two weeks of launch.",
  },
  {
    date: "Sep 2021 - Dec 2021 ",
    imgLink: "/img/img2.jpg",
    title: "Product Design Intern",
    sub: "Winuall",
    subTitle:
      "I focused on visual and interaction design for the product, crafting compelling narratives. My responsibilities included creating interactive features that enriched user experiences on both the app and website.",
  },
];

function Expage() {
  const [show, setShow] = useState(link[0]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      className="relative max-w-5xl mx-auto px-8"
    >
      <div className="relative mt-14">
        <h2 className="text-xl text-center dark:text-neutral-400 font-InterBold uppercase ">
          Experience
        </h2>
        <Link href={"/"}>
          <div className=" bg-neutral-700/10 rounded-md absolute -top-1  w-12 h-8 flex  items-center justify-center ">
            <TbArrowBackUp className="dark:text-white  text-black text-xl" />
          </div>
        </Link>
      </div>

      <div className="mt-44">
        <div className=" ">
          {link.map((each) => (
            <div key={each.title} className="my-8  p-2 rounded-md ">
              <div className="border border-neutral-700 rounded-full  w-fit px-2 p-1 flex items-center ">
                <span className="text-xs text-neutral-700 dark:text-neutral-300 ">
                  {each.date}
                </span>
              </div>

              <div>
                <div className="flex gap-x-4 my-6">
                  <motion.img
                    initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      filter: "blur(0px)",
                      transition: { duration: 0.4, delay: 0.5 },
                    }}
                    className="w-14 h-14 rounded-full"
                    src={each.imgLink}
                    alt=""
                  />
                  <div>
                    <motion.h1
                      initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        transition: { duration: 0.2, delay: 0.3 },
                      }}
                      className="font-InterBold  text-lg "
                    >
                      {each.title}
                    </motion.h1>
                    {/* you can add your desired links hrefs in the lnk array n wrap here with href */}
                    <Link className="font-semibold hover:underline" href={"/"}>
                      {each.sub}
                    </Link>
                  </div>
                </div>

                <motion.p
                  initial={{ x: -200 }}
                  animate={{ x: 0 }}
                  className=" text-neutral-500 text-lg max-w-3xl"
                >
                  {each.subTitle}
                </motion.p>
              </div>

              {show.bttn && (
                <button className="mt-10 border border-neutral-700/30 rounded-md px-2 py-2 flex justify-between items-center gap-x-2 lg:w-36 bg-neutral-800/20 text-sm text-neutral-900 dark:text-neutral-200 font-semibold">
                  <span>View my work</span>
                  <PiLockThin className="text-neutral-900 dark:text-neutral-200" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Expage;
