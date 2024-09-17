'use client'
import React from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";
import { useState , useRef } from "react";
import {motion , useInView} from 'framer-motion'

const ProjectsData = [
  
  {
    id: 1,
    title: "Next Js Food Delivery App",
    description: "This project is made up of react and next.js  ",
    images: "/Images/projects/food.png",
    tag: ["All", "Web"],
    gitUrl : '/',
    previewUrl : '/'
  },
  {
    id: 2,
    title: "Netflix Clone",
    description: "This project is made up of Html  css and Javascript   ",
    images: "/Images/projects/netflix.png",
    tag: ["All", "Web"],
     gitUrl : '/',
    previewUrl : '/'
  },
  {
    id: 3,
    title: "Todo List",
    description: "This project is made up of HTML Css and jAVASCRIPT ",
    images: "/Images/projects/todo.png",
    tag: ["All", "Web"],
    gitUrl : '/',
    previewUrl : '/'
  },
  {
    id: 4,
    title: "Stop Watch",
    description: "This project is made up of Html css and Javascript  ",
    images: "/Images/projects/watch.png",
    tag: ["All", "Web"],
    gitUrl : '/',
    previewUrl : '/'
  },
  {
    id: 5,
    title: "Tic Tac Toe Game ",
    description: "This project is made up of Html css and Javascript",
    images: "/Images/projects/tic.jpeg",
    tag: ["All", "Web"],
    gitUrl : '/',
    previewUrl : '/'
  },{
    id: 6,
    title: "Tacos Shop ",
    description: "This project is made up of Html css and Javascript",
    images: "/Images/projects/tacos.jpg",
    tag: ["All" ],
     gitUrl : '/',
    previewUrl : '/'
  },
];

function ProjectsSection() {
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
      <h2 className='text-center text-4xl font-bold text-black mt-4 mb-8 md:mb-12'>
         My Projects
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

export default ProjectsSection;
