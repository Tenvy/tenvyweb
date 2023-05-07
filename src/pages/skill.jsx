import { Footer } from "@/components/Organisms/Footer";
import { Navbar } from "@/components/Organisms/Navbar";
import Sidebar from "@/components/Organisms/Sidebar";
import SkillDetail from "@/components/Organisms/SkillDetail";
import React from "react";

const skill = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="container mx-auto">
        <SkillDetail />
      </div>
      <Footer/>
    </div>
  );
};

export default skill;
