'use-client'
import React from 'react'

function ProjectTag({name , onClick , isSelected}) {
    const ButtonStyle= isSelected ? 'text-black border-[#683f19]' : 'text-[gray] border-slate-200  hover:border-black'
  return (
    <button className={`rounded-full border-2  px-6 py-3 text-xl cursor-pointer ${ButtonStyle} `} onClick={ () => onClick(name)}>
        {name}
    </button>
  )
}

export default ProjectTag