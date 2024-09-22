'use client'
import React from "react";
import GithubIcon from "../../../public/github.svg";
import Linkedin from "../../../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function EmailSection() {
    const [emailSubmitted , setEmailSubmitted ] = useState(false)
     const handleSubmit =  async (e) => {
        e.preventDefault();
        const data = {
            email : e.target.email.value,
            subject :e.target.subject.value,
            message:e.target.message.value,
        }
        console.log('Form Data:', data); 
        
        const jsonData =   JSON.stringify(data);
        
        const endPoints = '/api/send'
        const options = {
            method : 'POST' ,
            body : jsonData,
            headers :{
                'Content-Type' : 'application/json'
            },
            
         }
         const response = await fetch(endPoints , options)
         const resData = await response.json()
         console.log(resData)
         if(response.status === 200){
            console.log('Message sent.')
            setEmailSubmitted(true)
         }
    }
  return (
    <section id='contact' className="grid md:grid-cols-2 my-12 md:my-12 gap-4 py-24 relative">
        {/* <div className=' bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#9c7356] to-white rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div> */}
      <div className='z-1'>
        <h5 className="text-xl font-bold text-black my-2">Let&apos;s Connect</h5>
        <p className="text-slate-500 mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open,
          Whether you have a question or just want to say hi, I&apos;ll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2 ">
          <Link href="https://github.com/KULSOOMadnan">
            <Image src={GithubIcon} alt="Github Icon" className="h-10 w-10 " />
          </Link>
          <Link href="https://www.linkedin.com/in/kulsoomadnan">
            <Image src={Linkedin} alt="Linkedin Icon" className="h-10 w-10" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6 ">
            <label
              htmlFor="email"
              className="text-black block mb-2 text-sm font-medium "
            >
              Your Email
            </label>
            <input
              name='email'
              type="email"
              id="email"
              required
              className="bg-[#878787] border border-[#33353F] placeholder-[#ffffff] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jone@gmail.com"
            />
          </div>
          <div className="mb-6 ">
            <label
              htmlFor="subject"
              className="text-black block mb-2 text-sm font-medium "
            >
              Subject
            </label>
            <input
            name='subject'
              type="text"
              id="subject"
              required
              className="bg-[#878787] border border-[#33353F] placeholder-[#ffffff] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just say Hi!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-black block text-sm font-medium "
            >
              Message
            </label>
            <textarea
          
              name="message"
              id="message"
              className="bg-[#878787] border border-[#33353F] placeholder-[#ffffff] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about.."
            ></textarea>
          </div>
          <button type='submit' className='bg-brown-300 hover:bg-brown-400 text-white font-medium py-2.5 px-5 rounded-lg w-full ' > Send message</button>
          {
            emailSubmitted && (
                <p className='text-green-500 text-sm mt-2 justify-center ' >Email Send Succesfully!</p>
            )
          }
        </form>
      </div>
    </section>
  );
}

export default EmailSection;
