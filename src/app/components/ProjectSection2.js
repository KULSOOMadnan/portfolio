'use client'
import React from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";
import { useState , useRef } from "react";
import {motion , useInView} from 'framer-motion'
import Link from "next/link";

const ProjectsData = [
  {
    id: 1,
    title: "Netflix Clone",
    description: "This project is made up of Html  css and Javascript   ",
    images: "/Images/projects/netflixbg.jpg",
    tag: ["All", "Web"],
     gitUrl : '/',
    previewUrl : '/'
  },
  {
    id: 2,
    title: "Next Js Food Delivery App",
    description: "This project is made up of react and next.js  ",
    images: "https://www.foodiv.com/wp-content/uploads/2023/10/Cost-to-Build-A-Food-Delivery-App-like-Ubereats.jpg",
    tag: ["All", "Web"],
    gitUrl : '/',
    previewUrl : '/'
  },

  {
    id: 3,
    title: "Todo List",
    description: "This project is made up of HTML Css and jAVASCRIPT ",
    images: "https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/960x0.jpg?format=jpg&width=1440",
    tag: ["All", "Web"],
    gitUrl : 'https://github.com/KULSOOMadnan/Todo-list',
    previewUrl : 'https://todo-list-sandy-xi.vercel.app/'
  },
  {
    id: 4,
    title: "Stop Watch",
    description: "This project is made up of Html css and Javascript  ",
    images: "https://as2.ftcdn.net/v2/jpg/02/13/65/79/1000_F_213657903_Eue1MH7Sy1TWK8dYbrN9MM5Rgd7VJczN.jpg",
    tag: ["All", "Web"],
    gitUrl : 'https://github.com/KULSOOMadnan/stop-watch',
    previewUrl : 'https://stop-watch-orcin-nine.vercel.app/'
  },
  {
    id: 5,
    title: "Tic Tac Toe Game ",
    description: "This project is made up of Html css and Javascript",
    images: "https://cdn.create.vista.com/api/media/medium/359772266/stock-photo-tic-tac-toe-game-blackboard-crossed-out-row-crosses-wooden?token=",
    tag: ["All", "Web"],
    gitUrl : 'https://github.com/KULSOOMadnan/tic-tac-toe-game',
    previewUrl : 'https://tic-tac-toe-game-phi-blond.vercel.app/'
  },{
    id: 6,
    title: "Tacos Shop ",
    description: "This project is made up of Html css and Javascript",
    images: "/Images/projects/tacos.jpg",
    tag: ["All" ],
     gitUrl : 'https://github.com/KULSOOMadnan/TacosShop/tree/main/final-project',
    previewUrl :'https://tacos-shop-five.vercel.app/'
  },{
    id: 7,
    title: "Resume Builder",
    description: "This project is made up of Html css Typescript and Javascript",
    images: "https://as2.ftcdn.net/v2/jpg/07/61/17/05/1000_F_761170568_JCVYqlrkpW6gH4dGIgblEWCaDLQPcQGt.jpg",
    tag: ["All" ],
     gitUrl : 'https://github.com/KULSOOMadnan/resume-builder/tree/main/milestone2',
    previewUrl :'https://resume-builder-by-kulsoom.vercel.app/'
  },
  ,{
    id: 8,
    title: "Resume",
    description: "This project is made up of Html css Typescript  and Javascript",
    images: "/Images/projects/resumebg.png",
    tag: ["All" ],
     gitUrl : 'https://github.com/KULSOOMadnan/resume-builder/tree/main/milestone1',
    previewUrl :'https://resume-builder-kulsoom.vercel.app/'
  },{
    id: 9,
    title: "Resume",
    description: "This project is made up of Html css Typescript  and Javascript",
    images: "/Images/projects/resumebg.png",
    tag: ["All" ],
     gitUrl : 'https://github.com/KULSOOMadnan/resume-builder/tree/main/milestone1',
    previewUrl :'https://resume-builder-kulsoom.vercel.app/'
  },
];

function ProjectsSection2() {
  const [tag , Settag] = useState('All')
  const ref = useRef(null);
  const isView = useInView(ref , {once : true})
  const handleTag = (newTag) => {
    Settag(newTag)
  }
  const FilterProjects = ProjectsData.filter((project) => (
    project.tag.includes(tag)
  ));

  const cardVarients = {
    initial : {y :50 , opacity : 0 },
    animate : {y : 0 , opacity : 1}
  };
  return (
    <section id='projects' >
      <h2 className='text-center lg:text-7xl  sm:text-5xl text-4xl font-extrabold text-[gray]  mb-8 md:mb-12 '>
        <span className=" text-brown-500 ">My</span> Projects
      </h2>
      <div className='text-black flex flex-row justify-center items-center gap-2  py-6'>
        <ProjectTag onClick={ handleTag} name='All' isSelected={tag === 'All'}/>
        <ProjectTag onClick={ handleTag} name='Web' isSelected={tag === 'Web'}/>
        <ProjectTag onClick={ handleTag} name='Mobile' isSelected={tag === 'Mobile'}/>
      </div>
      <ul  ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12 '>
        {FilterProjects.map((project , index ) => (
          <motion.li 
           key ={index}
           variants = {cardVarients} initial ='initial' animate={isView ? 'animate' : 'initial'} transition ={{duration : 0.3 , delay : index * 0.5}}
          > 
          <ProjectsCard 
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.images}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
          </motion.li>


        ))}

      </ul>
      
    </section>
  );
}

export default ProjectsSection2;
