'use-client'
import React from 'react'

interface PROJECTTag {
  name : string ,
  onClick :(name : string) => void ,
  isSelected : boolean ,
}

function ProjectTag({name , onClick , isSelected} : PROJECTTag) {
    const ButtonStyle= isSelected ? 'text-black border-[#683f19]' : 'text-[gray] border-slate-200  hover:border-black'
  return (
    <button className={`rounded-full border-2  px-6 py-3 text-xl cursor-pointer ${ButtonStyle} `} onClick={ () => onClick(name)}>
        {name}
    </button>
  )
}

export default ProjectTag