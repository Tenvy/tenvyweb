import Image from "next/image";
import styles from '@/styles/Home.module.css'
import React, { useEffect, useState } from "react";

const SkillDetail = () => {
    let [images,setImages] = useState(false)
    const onCLickTechnology = "hover:bg-white hover:bg-opacity-5 rounded px-2 hover:cursor-pointer underline"

  return (
    <div className={`${styles.animateFadeIn} flex md:p-20 py-10`}>
      <div className="w-[100%] md:w-[50%] p-10">
        <div>
          <div className="my-4">
            <h1 className="font-bold text-2xl duration-200">TOOLS</h1>
            <p>Tech stack or Tools that i use to develop an application</p>
          </div>
          <div>
            <div onClick={()=>{setImages("next")}} className={onCLickTechnology}>
              Next JS
            </div>
            <div onClick={()=>{setImages("react")}} className={onCLickTechnology}>
              React JS
            </div>
            <div onClick={()=>{setImages("tailwind")}} className={onCLickTechnology}>
              Tailwind CSS
            </div>
            <div onClick={()=>{setImages("mysql")}} className={onCLickTechnology}>
              MySQL
            </div>
            <div onClick={()=>{setImages("mariadb")}} className={onCLickTechnology}>
              MariaDB
            </div>
            <div onClick={()=>{setImages("vsc")}} className={onCLickTechnology}>
              Visual Studio Code
            </div>
            <div onClick={()=>{setImages("git")}} className={onCLickTechnology}>
              Git
            </div>
          </div>
        </div>
        <div>
          <div className="my-4">
            <h1 className="font-bold text-2xl">LANGUAGES</h1>
            <p>Programming Languages that i use to develop an application</p>
          </div>
          <div>
            <div onClick={()=>{setImages("javascript")}} className={onCLickTechnology}>
              JavaScript
            </div>
            <div onClick={()=>{setImages("php")}} className={onCLickTechnology}>
              PHP
            </div>
            <div onClick={()=>{setImages("cpp")}} className={onCLickTechnology}>
              C++
            </div>
          </div> 
        </div>
        <div>
          <div className="my-4">
            <h1 className="font-bold text-2xl">CURRENT ACTIVITY</h1>
            <div className="flex flex-col gap-5">
              <p>
                I'm very active in several communities on Discord, so if you
                want to chat with me you can DM me on Discord{" "}
                <a
                  href="https://discord.com/users/816154291928432690"
                  target="_blank"
                  className="underline duration-200 hover:bg-gradient-to-r hover:from-red-500 hover:via-pink-300 hover:to-blue-500 hover:bg-clip-text hover:text-transparent"
                >
                  tenvy#1706
                </a>
              </p>
              <p>
                I like to spend my time learning about new Tools or sometime I
                like to spend my time learning Game Hacking. I'm currently
                learning Qwik js
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-[100%] md:w-[50%] z-[-1] md:z-[0] fixed md:static h-[50vh] flex justify-center`}>
        <div className="fixed top-[25vh] flex items-center justify-center h-[50vh] hover:bg-white hover:bg-opacity-5 rounded duration-200 w-[50vh]">
            <Image src={`${images ? `/${images}.webp` : "/vercel.svg" }`} className="w-[200px] md:w-[300px] brightness-50 md:brightness-100" width={300} height={300} priority="true" alt="Skill_Images"/>
        </div>
      </div>
    </div>
  );
};

export default SkillDetail;
