import React, { useEffect, useRef, useState } from 'react'
import eye from '../../../public/eye.png'
import eyeball from '../../../public/eyeball.png'
import Image from 'next/image'
import Link from 'next/link'

export const Eyeball = () => {
    const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

    const eyeRef = useRef(null)
    const anchorRef = useRef(null)

    function calcAngle(element) {
      if (!element.current) return;
      
    let elX = element.current.offsetLeft + element.current.clientWidth / 2;
    let elY = element.current.offsetTop + element.current.clientHeight / 2;
  
      var rad = Math.atan2(mouseCoordinates.x - elX, mouseCoordinates.y - elY);
      var rot = rad * (180 / Math.PI) * -1 + -8;
  
      return rot;
    }

    const handleMouseMove = (event) => {
        setMouseCoordinates({ x: event.clientX, y: event.clientY });
        return setMouseCoordinates
    }

      useEffect(()=>{
        document.addEventListener('mousemove',handleMouseMove);
    },[])
    
  return (
    <div>
        <Image ref={anchorRef} className='' width={100} src={eye} alt="eye" priority="true"/>
        <div className=''>
            <Image ref={eyeRef} style={{transform: `rotate(${calcAngle(eyeRef)}deg)`,}} className='absolute top-[0px] scale-x-[-1]' src={eyeball} width={100} height={100} priority="true" alt="eyeball"/>
        </div>
    </div>
  )
}
