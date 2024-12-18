"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { animate, motion } from "framer-motion";
import { frame } from "framer-motion";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center sm:text-left justify-self-start"
        >
          <h1 className="text-black mb-4 lg:text-7xl lg:leading-normal text-4xl sm:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brown-50 to-brown-900">
              Hello, I&apos;m
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Kulsoom Sheikh",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "Student",
                1000,
                "UI/UX Designer",
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[grey]  text-base  sm:text-lg lg:text-xl mb-6 ">
            I am a passionate front-end developer with expertise in React,
            Next.js, JavaScript, and TypeScript, building modern, responsive,
            and dynamic web applications. With a strong foundation in HTML and
            CSS, I specialize in creating clean, efficient, and user-friendly
            interfaces, utilizing Tailwind CSS and Bootstrap
          </p>
          <div className="">
            <Link  href="https://github.com/KULSOOMadnan"
             className='inline-flex justify-center items-center w-8 h-8 bg-transparent text-xl mb-8 mr-5 mt-4 ml-0 transition duration-[0.3s] ease-in on hover:text-white transform hover:scale-105 hover:-translate-y-1  text-brown-500  border-[#dfdfdf] border  hover:bg-brown-400  hover:shadow-[0_0_25px_#87561e] rounded-full'>
              <p className="fa-brands fa-github "></p>
            </Link>
            <Link href="https://www.instagram.com" 
             className='inline-flex justify-center items-center w-8 h-8 bg-transparent text-xl mb-8 mr-5 mt-4 ml-0 transition duration-[0.3s] ease-in on hover:text-white transform hover:scale-105 hover:-translate-y-1  text-brown-500  border-[#dfdfdf] border hover:bg-brown-400  hover:shadow-[0_0_25px_#87561e] rounded-full'>
            {" "}
              <p className="fa-brands fa-instagram"></p>
            </Link>

            <Link href="https://www.facebook.com"
             className='inline-flex justify-center items-center w-8 h-8 bg-transparent text-xl mb-8 mr-5 mt-4 ml-0 transition duration-[0.3s] ease-in on hover:text-white transform hover:scale-105 hover:-translate-y-1  text-brown-500  border-[#dfdfdf] border hover:bg-brown-400  hover:shadow-[0_0_25px_#87561e] rounded-full'>

              <p className="fa-brands fa-facebook"></p>
            </Link>

            <Link href="https://www.linkedin.com/in/kulsoomadnan/"
             className='inline-flex justify-center items-center w-8 h-8 bg-transparent text-xl mb-8 mr-5 mt-4 ml-0 transition duration-[0.3s] ease-in on hover:text-white transform hover:scale-105 hover:-translate-y-1  text-brown-500  border-[#dfdfdf] border hover:bg-brown-400  hover:shadow-[0_0_25px_#87561e] rounded-full'>

              <p className="fa-brands fa-linkedin"></p>
            </Link>


          </div>

          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-white mr-4 text-white bg-gradient-to-br from-brown-800 via-brown-600 to-brown-900  hover:bg-slate-200">
             <a href="mailto:adnanirfan282@gmail.com"> Hire Me{" "} </a>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-brown-800 via-brown-600 to-brown-900 text-black  mt-3 ">
              <a href="https://resume-builder-kulsoom.vercel.app/" className="block bg-[rgb(255,255,255)] rounded-full hover:bg-slate-50 px-5 py-2">
                Download CV
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4  lg:mt-0  "
        >
          <div className="rounded-full bg-white w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
            <Image
              src="/Images/pic.png"
              height={350}
              width={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              alt="Hero Image"
            />
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}

export default HeroSection;
