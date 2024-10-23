"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title : 'Skills',
    id : 'skills',
    content : (
      <ul className='list-disc pl-2'>
        <li>Node.js</li>
        <li>Next.js</li>
        <li>React.js</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>HTML</li>
        <li>Css</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
      </ul>
    )
  },
  {
    title : 'Education',
    id : 'education',
    content : (
      <ul className='list-disc pl-2'>
        <li>Completed my Intermediate</li>
        <li>University of Karachi </li>
        
      </ul>
    )
  },
  {
    title : 'Experience',
    id : 'experience',
    content : (
      <ul className='list-disc pl-2'>
        <li>Intern at Code alpha</li>
      </ul>
    )
  },
]

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [ispanding, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id='about' className="text-[grey]  ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/Images/about.png" width={500} height={500} alt='about imag' />
        <div className=' mt-4 md:mt-0 text-left flex  flex-col h-full'>
          <h2 className="text-4xl font-bold text-black mb-4 font-['Great Vibes'] ">About Me</h2>
          <p className="text-base md:text-lg ">
            I am a passionate front-end developer with expertise in React,
            Next.js, JavaScript, and TypeScript, building modern, responsive,
            and dynamic web applications. With a strong foundation in HTML and
            CSS, I specialize in creating clean, efficient, and user-friendly
            interfaces, utilizing Tailwind CSS and Bootstrap for streamlined
            styling. I enjoy transforming design ideas into seamless experiences
            and continuously expanding my skills to stay at the cutting edge of
            web development. Whether it&apos;s optimizing performance or enhancing
            the user experience, I bring creativity and precision to every
            project I work on.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience
            </TabButton>
          </div>
          <div className='mt-8 '> {TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
