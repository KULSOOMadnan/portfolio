import Link from "next/link";
import React from "react";
import { CodeBracketIcon  , EyeIcon} from "@heroicons/react/24/solid";

function ProjectsCard({ imgUrl, title, description , gitUrl , previewUrl}) {
  return (
    <div>
      <div
        className="h-52 md:h-72  rounded-t-xl relative group "
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundRepeat : 'no-repeat' , backgroundPosition: 'center' }}
      >
        <div className="overlay items-center  justify-center absolute top-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex rounded-t-xl group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2  border-2 relative rounded-full  hover:border-white group/link"
          >
            < CodeBracketIcon className="fa-brands fa-github h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE] cursor-pointer group-hover/link:text-white"/>{" "}
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14  border-2 relative rounded-full  hover:border-white group/link"
          >
            < EyeIcon className="fa-brands fa-github h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE] cursor-pointer group-hover/link:text-white"/>{" "}
          </Link>
        </div>
      </div>
      <div className="text-black mt-2 rounded-b-xl bg-[#fefefe] px-4 py-6">
        <h5 className="text-xl font-semibold mb-2  ">{title}</h5>
        <p className="text-[gray]">{description}</p>
      </div>
    </div>
  );
}

export default ProjectsCard;
