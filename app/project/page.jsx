"use client";

import React, { useEffect } from "react";
import { TbArrowBackUp } from "react-icons/tb";

import Status from "@/app/Status/page";
import Link from "next/link";

import { useAnimate, stagger, motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    imgLink: "/img/img6.jpg",
    title: "Redesigning the landing page for better discoveribility",
    subT: "Redesigned 'The Product House' landing page for my take-home assignment! My goal was to create an engaging and informative showcase of their brand.",
  },
  {
    imgLink: "/img/img1.jpg",
    title: "UI/ UX Case Study: Group Food Ordering",
    subT: "Designed an solution that simplifies the decision-making process and saves time for users while ordering food in a group.",
  },
  {
    imgLink: "/img/img2.jpg",
    title:
      "UI/ UX Case Study: Enabling local stores to sell on WhatsApp for Businesses",
    subT: "Designed a feature that simplifies local store sales on WhatsApp for businesses..",
  },
  {
    imgLink: "/img/img3.jpg",
    title: "Creating Dive platform's Trivia Game",
    subT: "Designed a trivia game to enhance user engagement during sessions on Dive platform.",
  },
];

function Projpage() {
  const [scope, animate] = useAnimate();
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

  useEffect(() => {
    animate(
      ".box",

      { opacity: 1, scale: 1, filter: "blur(0px)", x: 0 },

      {
        duration: 0.2,
      }
    );
  }, []);
  return (
    <div ref={scope} className="relative max-w-5xl mx-auto px-8">
      <div className="relative mt-14">
        <h2 className="text-xl text-center dark:text-neutral-400 font-InterBold uppercase ">
          Projects
        </h2>
        <Link href={"/"}>
          <div className=" bg-neutral-700/10 rounded-md absolute -top-1  w-12 h-8 flex  items-center justify-center ">
            <TbArrowBackUp className="dark:text-white  text-black text-xl" />
          </div>
        </Link>
      </div>

      <div className="mt-44">
        {projects.map((each, i) => (
          <div key={i}>
            <div className="flex flex-col lg:flex-row  gap-x-8 my-6">
              <motion.div
                initial={{ opacity: 0, scale: 0, filter: "blur(0px)", x: 0 }}
                className="h-60 box w-64 "
              >
                <Image
                  width={600}
                  height={600}
                  alt={each.subT}
                  className=" h-full w-full md:w-64 object-cover rounded-md"
                  src={each.imgLink}
                />
              </motion.div>

              <div>
                <div className="w-fit flex items-center gap-x-2 ">
                  <div className=" px-2 py-1 text-xs font-semibold   border rounded-full dark:border-neutral-700">
                    <span>2022</span>
                  </div>
                  <div className=" flex items-center gap-x-3">
                    <Status
                      Relaxing
                      className=" border rounded-full dark:border-neutral-700 px-2 py-1"
                    />
                  </div>
                </div>

                <div>
                  <h1 className="font-InterBold text-lg max-w-lg mt-4">
                    {each.title}
                  </h1>
                  <p className="text-base mt-3 font-InterMedium dark:text-neutral-400 max-w-lg">
                    {each.subT}
                  </p>

                  <button className="mt-11 border border-neutral-700/30 rounded-xl p-2 px-7 lg:w-44 bg-white dark:bg-neutral-800/10 text-sm dark:text-neutral-400 font-semibold shadow-md">
                    Read Now
                  </button>
                </div>
              </div>
            </div>
            <div className="border my-16 border-neutral-300 dark:border-neutral-800  h-[1px]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projpage;
