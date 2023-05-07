import React , {useEffect, useState, useRef} from "react";
import Link from "next/link";
import { Eyeball } from "../Molecules/Eyeball";

const Sidebar = () => {
  const [open,setOpen] = useState(false)
  const sidebarRef = useRef(null);

  const sideBarClass = `duration-200 ease-in-out ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <div className="md:hidden">
      <div className="fixed justify-center w-full mix-blend-difference z-10 flex">
        <div onClick={() => setOpen(!open)}>
          <Eyeball />
        </div>
      </div>
      <div ref={sidebarRef} className={`fixed z-10 h-screen mix-blend-difference backdrop-blur-md flex flex-col items-center gap-4 font-bold text-lg py-20 duration-200 ease-in-out ${open ? "w-[40vh]" : "w-0"}`}>
        <div>
          <Link href={"/"} className={sideBarClass}>Home</Link>
        </div>
        <div>
          <Link href={"/about"} className={sideBarClass}>About</Link>
        </div>
        <div>
          <Link href={"/skill"} className={sideBarClass}>Skills</Link>
        </div>
        <div>
          <Link href={"/project"} className={sideBarClass}>Projects</Link>
        </div>
        <div>
          <Link href={"/contact"} className={sideBarClass}>Contacts</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
