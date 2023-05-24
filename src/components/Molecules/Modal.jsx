import project from "@/pages/project";
import Image from "next/image";
import React from "react";
import styles from '@/styles/Home.module.css'

const Modal = (props) => {
  const {projectData,setProjectData} = props

  if(projectData !== null){
    return (
      <div className={`fixed z-20 justify-center items-center w-full flex h-full ${styles.animateFadeIn}`}>
        <div className="w-[90vw] md:w-[80vw] lg:w-[60vw] bg-black bg-opacity-10 backdrop-blur-md rounded-lg p-2 h-screen overflow-y-scroll md:h-auto md:overflow-y-hidden">
          <div className="flex p-4">
            <div className="font-bold text-3xl">
              {projectData.name}
            </div>
            <button type="button" onClick={() => setProjectData(null)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
              <svg className="w-5 h-5"fill="currentColor"viewBox="0 0 20 20"xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div className="w-full h-[2px] mb-2 bg-white"/>
          <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-2 items-center">
            <a className="hover:brightness-50 mx-auto" target="_blank" href={projectData.link}>
              <Image className="rounded-lg" src={projectData.banner} width={500} height={500} alt="imagepreview"/>
            </a>
            <div className="text-xl text-center">
            {projectData.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
