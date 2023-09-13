"use client";

import Status from "@/app/Status/page";

import React, { useState } from "react";
import Link from "next/link";
import { PiLockThin } from "react-icons/pi";
import Image from "next/image";

import { motion } from "framer-motion";

const projects = [
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

function Frpage() {
  const [show, setShow] = useState(link[0]);

  return (
    <div className="mt-32">
      <div className="flex gap-x-4">
        <Image
          width={300}
          height={300}
          className="w-16 h-16 rounded-full object-cover"
          src="/img/img3.jpg"
          alt="Profile"
        />
        <div>
          <h2 className="font-extrabold font-InterBlack dark:text-white text-3xl">
            JoScriptt
          </h2>
          <Link href={"https://twitter.com/harshii04"}>
            <span className="text-neutral-500 ">@ Jonaldo</span>
          </Link>
          <Status isAvailbale />
        </div>
      </div>

      <div className="mt-6 max-w-3xl">
        <h3 className="text-neutral-500 text-xs font-InterBold  uppercase ">
          About Me
        </h3>
        <p className="dark:text-neutral-300  font-InterMedium  mt-3">
          I’m crafting exceptional products that blend Design and Engineering.
          Making Impactful experiences with beauty and function. Currently ,
          looking for new opportunities to collaborate with people.
        </p>
        <p className="mt-6 dark:text-neutral-300 max-sm:text-sm font-InterMedium">
          My objective is straightforward, to create exceptional things
          alongside exceptional individuals. By collaborating harmoniously, we
          can accomplish this goal.
        </p>

        <button className="mt-10 border border-neutral-700/30 rounded-md p-2 w-full lg:w-44 bg-neutral-800/20 text-sm dark:text-neutral-400 font-semibold">
          View resume
        </button>
      </div>

      {/* Marquee text */}

      <div>
        <div className="marquee  relative my-24 h-10 max-w-6xl overflow-x-hidden">
          <div className=" bg-gradient-to-r absolute z-10 from-[#fff] via-[#fff] dark:from-[#161616] dark:via-[#161616] to-transparent w-20 rounded-md h-9 transition-all ease-in duration-200" />
          <motion.div
            className="track"
            variants={marqueeVariants}
            animate="animate"
          >
            <div className=" flex gap-x-5 mt-2 uppercase font-semibold justify-evenly text-sm text-neutral-700">
              Project Project Project Project Project Project Project Project
              Project Project Project Project Project Project Project Project
              Project Project Project Project Project Project Project Project
              Project Project Project Project Project Project Project
            </div>
          </motion.div>
          <div className=" bg-gradient-to-l absolute right-0 z-10 dark:from-[#161616] dark:via-[#161616] from-[#fff] via-[#fff] to-transparent w-16 rounded-md h-9 transition-all ease-in duration-200" />
        </div>
      </div>

      {/* Projects */}

      <div className="">
        {projects.map((each, i) => (
          <div key={i}>
            <div className="flex flex-col lg:flex-row  gap-x-8 my-6">
              <div className="h-60 w-full md:w-64 ">
                <Image
                  width={700}
                  height={700}
                  alt="project"
                  className="w-full h-full object-cover rounded-md"
                  src={each.imgLink}
                />
              </div>

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

                  <button className="mt-11 border border-neutral-700/30 rounded-xl p-2 px-7 lg:w-44 w-full bg-white dark:bg-neutral-800/10 text-sm dark:text-neutral-400 font-semibold shadow-md">
                    Read Now
                  </button>
                </div>
              </div>
            </div>
            <div className="border my-16 border-neutral-300 dark:border-neutral-800  h-[1px]" />
          </div>
        ))}
      </div>

      {/* Marque texts */}

      <div>
        <div className="marquee my-24 h-10 relative  max-w-6xl overflow-x-hidden">
          <div className=" bg-gradient-to-r absolute z-10 from-[#fff] via-[#fff] dark:from-[#161616] dark:via-[#161616] to-transparent w-20 rounded-md h-9 transition-all ease-in duration-200" />
          <motion.div
            className="track"
            variants={marqueeVariants}
            animate="animate"
          >
            <div className=" flex gap-x-5 mt-2 uppercase font-bold justify-evenly text-sm  text-neutral-700">
              Experience Experience Experience Experience Experience Experience
              Experience Experience Experience Experience Experience Experience
              Experience Experience Experience Experience Experience Experience
              Experience Experience Experience Experience Experience Experience
              Experience Experience Experience Experience Experience Experience
            </div>
          </motion.div>
          <div className=" bg-gradient-to-l absolute right-0 z-10 dark:from-[#161616] dark:via-[#161616] from-[#fff] via-[#fff] to-transparent w-16 rounded-md h-9 transition-all ease-in duration-200" />
        </div>
      </div>

      {/* Experience */}

      <div className="">
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
                  <Image
                    width={400}
                    height={400}
                    className="w-14 h-14 rounded-full"
                    src={each.imgLink}
                    alt=""
                  />
                  <div>
                    <h1 className="font-InterBold  text-lg ">{each.title}</h1>
                    {/* you can add your desired links hrefs in the lnk array n wrap here with href */}
                    <Link className="font-semibold hover:underline" href={"/"}>
                      {each.sub}
                    </Link>
                  </div>
                </div>

                <p className=" text-neutral-500 text-lg max-w-3xl">
                  {each.subTitle}
                </p>
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

      {/* Marque texts */}

      <div>
        <div className="marquee  relative my-24 h-10 max-w-6xl overflow-x-hidden">
          <div className=" bg-gradient-to-r absolute z-10 from-[#fff] via-[#fff] dark:from-[#161616] dark:via-[#161616] to-transparent w-20 rounded-md h-9 transition-all ease-in duration-200" />
          <motion.div
            className="track"
            variants={marqueeVariants}
            animate="animate"
          >
            <div className=" flex gap-x-5 mt-2 uppercase font-bold justify-evenly text-sm  text-neutral-700">
              ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS
              ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS
              ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS
              ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS
            </div>
          </motion.div>
          <div className=" bg-gradient-to-l absolute right-0 z-10 dark:from-[#161616] dark:via-[#161616] from-[#fff] via-[#fff] to-transparent w-16 rounded-md h-9 transition-all ease-in duration-200" />
        </div>
      </div>

      <div>
        <p className="text-lg ">
          I take pleasure in meeting new people and am enthusiastic about
          assisting with any queries you may have.
        </p>

        <p className="mt-4">
          Additionally, I love discussing forgotten or unfinished projects and
          exploring the fascinating topic of how artificial intelligence could
          potentially dominate the world.
        </p>
      </div>
    </div>
  );
}

export default Frpage;

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 11,
        ease: "linear",
      },
    },
  },
};
