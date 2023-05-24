'use client'

import Image from "next/image";
import styles from "@/styles/Home.module.css";
import React,{ useState , useEffect } from "react";

const ProjectDetail = (props) => {
  const {projectData,setProjectData} = props
  let [projects,setProjects] = useState()

  const cardClass = "w-auto h-[200px] md:h-[180px] grid grid-cols-2 px-4 justify-center items-center bg-white bg-opacity-5 rounded hover:bg-opacity-100 hover:text-black font-bold text-xl cursor-pointer group";
  const imageCardClass = "group-hover:brightness-50 rounded-full mx-auto object-cover w-[100px] h-[100px]";

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/projectdata');
      const data = await res.json();
      setProjects(data);
    }
    fetchData();
    projectData !== null ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto" 
  }, []);

  const projectsList = [];
  if (projects && projects.length > 0) {
    for (let i = 0; i < 6; i++) {
      const item = projects[i] || {name: 'Coming Soon',image: '/questionmark.png', banner:'/tenvy.png', description: 'Coming Soon' };
        projectsList.push(
          <div className={cardClass} onClick={() => setProjectData(item)} key={item.id}>
          <Image
            className={imageCardClass}
            src={item.image}
            width={100}
            height={100}
            alt="image"
          />
          <div>{item.name}</div>
        </div>
        );
      }
}

  return (
    <div
      className={`md:px-20 flex md:items-start lg:items-center pt-20 pb-16 md:pb-20 lg:h-screen ${styles.animateFadeIn}`}
    >
      <div className="w-[100%] h-auto grid grid-cols-1 gap-2 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 p-2">
        {projectsList}
      </div>
    </div>
  );
};

export default ProjectDetail;

