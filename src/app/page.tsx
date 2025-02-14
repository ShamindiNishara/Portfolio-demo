
"use client";

import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import ProfileImage from "../../public/p2.png";
import graphicDesign from "../../public/design.png"
import codeImage from "../../public/code.png"
import image1 from "../../public/web1.png"
import image2 from "../../public/web2.png"
import image3 from "../../public/web3.png"
import { useState } from "react";

//dark mode


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className ={darkMode ? "dark" : ""}>
          <main className = "font-poppins bg-yellow-50 min-h-screen px-10 md:px-20 lg:px-40 dark:bg-black">
      <section>
        {/* navigation */}
        <nav className = "py-10 flex justify-between">
          <h1 className ="text-sm dark:text-white">Developed by Shamindi</h1>
        <ul className = "flex items-center ">
          {/* icon */}
          <li>
          <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className ="cursor-pointer text-xl mx-5 dark:text-white" />
          </li>
          <li><a href="https://drive.google.com/file/d/1c8YvIg1c4K8QzDjMQSGnVLQ4XxzJWGkw/view?usp=sharing" 
          className ="bg-yellow-400 text-black px-4 py-2  rounded-md"
          download={"resume"}>Resume</a></li>
        </ul>
        </nav>
        {/* hero section */}
        <div className ="text-center p-10">
          <h1 className="text-yellow-400 text-5xl font-bold md:text-6xl lg:text-7xl lg:mb-4"> Shamindi Nishara</h1>
          <h3 className ="text-black  text-2xl md:text-3xl dark:text-white">Software Engineer and Full Stack Developer</h3>
          <p className="text-xs text-slate-600  py-2 leading-6  max-w-xl mx-auto md:text-xl ">I am a highly driven and passionate individual with a deep commitment to the field of Computer Science and Engineering. With a strong belief in the transformative power of teamwork,
             I thrive on collaborating with others to achieve meaningful success 
             through dedication and hard work. I am an adaptable and resilient learner, 
             eager to embrace new challenges that push my limits and offer opportunities for 
             personal and professional growth. With a proactive mindset and a desire to 
             contribute innovative solutions.</p>
             {/* icons */}
          <div className ="text-5xl flex justify-center gap-16 text-gray-600">
              <a href ="https://github.com/ShamindiNishara"><FaGithub/></a>
              <a href ="https://www.linkedin.com/in/shamindi-pathirathna-cse/"> <FaLinkedin/></a>
              <a href ="https://github.com/ShamindiNishara"><AiFillTwitterCircle/></a>   
          </div>
          {/* profile */}
          <div className="m-auto relative bg-gradient-to-b from-yellow-200 w-80 h-80 p-5 mt-20 rounded-full">
            <Image src ={ProfileImage} alt="shamindi" layout="fill" objectFit="cover"/>
          </div>
        
        </div>

        {/* services i offer */}
        <section>
          <div>
            <h2 className="text-4xl py-5 font-bold opacity-60 dark:text-white">Services I offer</h2>
            <p className="text-xs text-slate-600  py-2 leading-6 lg:text-xl">I am a highly driven and passionate individual with a deep commitment to the field of Computer Science and Engineering. With a strong belief in the transformative power of teamwork,
             I thrive on collaborating with others to achieve meaningful success 
             through dedication and hard work. I am an adaptable and resilient learner, 
             eager to embrace new challenges that push my limits and offer opportunities for 
             personal and professional growth. With a proactive mindset and a desire to 
             contribute innovative solutions.</p>
          </div>
          {/* services cart */}
          <div className ="md:flex lg:flex gap-10 mx-auto">
              <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
                <Image src ={graphicDesign} alt=""  
                width ={100} height ={100} className ="inline"/> 
                <h2 className ="text-2xl font-bold">Web Development</h2>
                <p className ="text-sm py-2 text-gray-800 leading-6 ">I am a highly driven and passionate individual with a deep commitment to the field of Computer Science and Engineering. With a strong belief in the transformative power of teamwork</p>
              </div>
              <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
                <Image src ={codeImage} alt=""  
                width ={100} height ={100} className ="inline"/> 
                <h2 className ="text-2xl font-bold">Web Development</h2>
                <p className ="text-sm py-2 text-gray-800 leading-6 ">I am a highly driven and passionate individual with a deep commitment to the field of Computer Science and Engineering. With a strong belief in the transformative power of teamwork</p>
              </div>
              <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
                <Image src ={graphicDesign} alt=""  
                width ={100} height ={100} className ="inline"/> 
                <h2 className ="text-2xl font-bold">Web Development</h2>
                <p className ="text-sm py-2 text-gray-800 leading-6 ">I am a highly driven and passionate individual with a deep commitment to the field of Computer Science and Engineering. With a strong belief in the transformative power of teamwork</p>
              </div>
          </div>
          </section>
          {/* my work */}
          <section>
            <div>
               <h2 className="text-4xl py-5 font-bold opacity-60 dark:text-white"> Portfolio</h2>
               <p className="text-xs text-slate-600  py-2 leading-6 lg:text-xl ">I am a highly driven and passionate individual with a deep commitment to the field of Computer Science and Engineering. With a strong belief in the transformative power of teamwork,
             I thrive on collaborating with others to achieve meaningful success 
             through dedication and hard work. I am an adaptable and resilient learner, 
             eager to embrace new challenges that push my limits and offer opportunities for 
             personal and professional growth. With a proactive mindset and a desire to 
             contribute innovative solutions.</p>
             <div className="flex flex-col gap-5 p-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
              <Image src ={image3} alt="" height ={200} 
                width ={200} layout="responsive" className =" rounded-md object-cover"/>
              </div>
              <div className="basis-1/3 flex-1" >
              <Image src ={image2} alt="" height ={200} 
                width ={200} layout="responsive" className =" rounded-md object-cover"/>
              </div>
              <div className="basis-1/3 flex-1" >
              <Image src ={image1} alt="" height ={200} 
                width ={200} layout="responsive" className =" rounded-md object-cover"/>
              </div>
              <div className="basis-1/3 flex-1">
              <Image src ={image1} alt="" height ={200} 
                width ={200} layout="responsive" className =" rounded-md object-cover"/>
              </div>
              <div className="basis-1/3 flex-1">
              <Image src ={image3} alt="" height ={200} 
                width ={200} layout="responsive" className =" rounded-md object-cover"/>
              </div>
              <div className="basis-1/3 flex-1">
              <Image src ={image2} alt="" height ={200} 
                width ={200} layout="responsive" className =" rounded-md object-cover"/>
              </div>
                
             </div>
            </div>
          </section>
          {/* footer */}
          <footer className ="border-t-2 border-black text-sm opacity-70 flex flex-col gap-10 item-center py-10 justify-center lg:flex-row lg:items-center dark:border-white">
            <div>
              <h3 className ="text-md mb-3 dark:text-white" >Contact me for more detials</h3>
              <p className="text-xs text-slate-600  py-2 leading-6 ">I am a highly driven and passionate individual with a deep commitment to the field of Computer Science and Engineering. With a strong belief in the transformative power of teamwork,
             I thrive on collaborating with others to achieve meaningful success 
             through dedication and hard work. I am an adaptable and resilient learner, 
             eager to embrace new challenges that push my limits and offer opportunities for 
             personal and professional growth. With a proactive mindset and a desire to 
             contribute innovative solutions.</p>
            </div>
            <div className ="text-5xl flex justify-center gap-16 text-gray-600">
              <a href ="https://github.com/ShamindiNishara"><FaGithub/></a>
              <a href ="https://www.linkedin.com/in/shamindi-pathirathna-cse/"> <FaLinkedin/></a>
              <a href ="https://github.com/ShamindiNishara"><AiFillTwitterCircle/></a>   
          </div>
          </footer>
      </section>
    </main>
    </div>

  );
}
