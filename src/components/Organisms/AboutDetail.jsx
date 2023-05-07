import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export const AboutDetail = () => {
  return (
    <div className={`${styles.animateFadeIn} pt-[80px] md:pt-0 md:mb-0`}>
    <div className='container mx-auto md:h-screen flex flex-col md:flex-row justify-start md:justify-around items-center md:gap-5 p-5 md:p-20'>
        <div className='w-[100%] md:w-[50%] text-xl font-medium'>
          <div className='p-5 duration-200 hover:bg-white hover:bg-opacity-5 rounded'>
            Hello, my name is <span className="duration-200 hover:opacity-50">Rizky Kusyon</span> or you can call me <span className='duration-200 hover:bg-gradient-to-r hover:from-red-500 hover:via-pink-300 hover:to-blue-500 hover:bg-clip-text hover:text-transparent'>Tenvy</span>. I was born in Bali, Indonesia, in 2006. I really enjoy making things with logical theory. I like to do reverse engineering on games and other applications for learning and personal interest, such a game hacking.
          </div>
        </div>
        <div className='w-[100%] md:w-[50%]'>
            <div className='p-5 flex justify-center'>
              <div className='px-2 duration-200 hover:bg-white hover:bg-opacity-5 rounded'>
                <Image className='duration-300 hover:-translate-y-2 hover:translate-x-2' src="/hu.png" width={350} height={350} alt="tenvyimage"/>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}


