import React from 'react';
import Image from 'next/image';

function home() {
  return (
    <section>
      <div className='grid grid-cols-1  bg-black'>
      <div className ='col-span-8 mt-10 text-white  justify-self-start ml-6'>
      <h1 className='justify-self-center ' >Kuloom</h1>
      <p >i am a frontnd developer </p>
      </div>
      <div className=" col-span-4 place-self-end  mt-4  rounded-full bg-white w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
            <Image
              src="/images/pic.png"
              height={350}
              width={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              alt="Hero Image"
            />
          </div>
    </div>
    </section>
    
  )
}

export default home