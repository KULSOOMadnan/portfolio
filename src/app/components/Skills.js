import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "90",
  },
  {
    id: 2,
    title: "Css",
    percentage: "85",
  },
  {
    id: 3,
    title: "Javascript",
    percentage: "70",
  },
  {
    id: 4,
    title: "TypeScript",
    percentage: "95",
  },
  {
    id: 5,
    title: "React",
    percentage: "70",
  },
  {
    id: 6,
    title: "Next js",
    percentage: "50",
  },
  {
    id: 7,
    title: "Bootstrap",
    percentage: "60",
  },
  {
    id: 8,
    title: "Tailwind",
    percentage: "65",
  },
  {
    id: 9,
    title: "Figma",
    percentage: "20",
  },
];

function Skills() {
  return (
    // <>
    //   <h2 className="text-center lg:text-5xl  sm:text-4xl text-3xl font-extrabold text-brown-500  mb-12 md:mb-12 mt-20">
    //     <span className=" text-[gray] ">My</span> Skills
    //   </h2>

    //   <div className="grid grid-cols-4 gap-y-[48px] justify-items-center">
    //     {skills.map(({ title, percentage }, index) => {
    //       return (
    //         <div className="" key={index}>
    //           <div className="w-[120px] h-[120px] ">
    //             <CircularProgressbar
    //               strokeWidth={7.5}
    //               text={`${percentage}%`}
    //               value={percentage}
    //               styles={{
    //                 path: {
    //                   // Path color
    //                   stroke: '#a76a32', 
    //                   strokeLinecap: 'butt', 
    //                 },
    //                 trail: {
    //                   // Trail color
    //                   stroke: '#ededed', 
    //                 },
    //                 text: {
    //                   // Text color
    //                   fill: "#666666",
    //                   fontSize : "18px",
    //                   fontWeight : 'normal'
                      
    //                 },
    //               }}
    //             />
    //           </div>
    //           <h3 className="text-center text-xl mt-6 font-bold  ">{title}</h3>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </>
    <>
  <h2 className="text-center lg:text-5xl sm:text-4xl text-3xl font-extrabold text-brown-500 mb-12 md:mb-12 mt-20">
    <span className="text-gray-500">My</span> Skills
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6 justify-items-center mb-20">
    {skills.map(({ title, percentage }, index) => {
      return (
        <div className="flex flex-col items-center" key={index}>
          <div className="w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] lg:w-[120px] lg:h-[120px]">
            <CircularProgressbar
              strokeWidth={7.5}
              text={`${percentage}%`}
              value={percentage}
              styles={{
                path: {
                  // Path color
                  stroke: '#a76a32',
                  strokeLinecap: 'butt',
                },
                trail: {
                  // Trail color
                  stroke: '#ededed',
                },
                text: {
                  // Text color
                  fill: '#666666',
                  fontSize: '16px',
                  fontWeight: 'normal',
                },
              }}
            />
          </div>
          <h3 className="text-center text-lg sm:text-xl mt-4 font-bold">{title}</h3>
        </div>
      );
    })}
  </div>
</>

  );
}

export default Skills;
