'use client'
import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineLogout } from "react-icons/hi";
import { BiSolidDashboard } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { PiChalkboardTeacher, PiGraduationCap, PiHouseLineBold } from "react-icons/pi";
import Link from 'next/link';

const Sidebar = () => {
  const icons = [
    { name: "Dashboard", link: '/dashboard', icon: BiSolidDashboard },
    { name: "Teachers", link: '/teachers', icon: PiChalkboardTeacher, margin: true },
    { name: "Classes", link: '/classes', icon: PiHouseLineBold },
    { name: "Subjects", link: '/subjects', icon: CgNotes },
    { name: "Parents", link: '/parents', icon: MdOutlinePersonalInjury },
    { name: "Students", link: '/students', icon: PiGraduationCap },
  ];
  const [open, setOpen] = useState(true);
  const [activeLink, setActiveLink] = useState('/Dashboard'); 
  const [showPopup, setShowPopup] = useState(false);

  const handleLinkClick = (link:any) => {
    setActiveLink(link);
  };

  const handleLogout = () => {
    setShowPopup(true);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleContinue = () => {
    
  };

  return (
    <nav className="flex gap-6">
      <div className={`bg-mainblue min-h-screen ${open ? "w-72" : "w-16"} duration-500 text-white px-4`}>
        <div className="py-3 flex justify-end mt-4">
          <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
        </div>
        <a href="#" className="ml-20 mb-8 mt-10">
          <img src="/media/mzaziconnect.svg" alt="logo" />
        </a>
        <div className="mt-4 flex flex-col gap-4 relative pt-10">
          {icons.map((icon, i) => (
            <Link href={icon.link} key={i}>
              <div
                className={` ${icon.margin && "mt-0"} group flex items-center text-ml  gap-3.5 font-medium p-2 ${activeLink === icon.link ? 'bg-hoverblue' : 'hover:bg-hoverblue'} rounded-md`}
                onClick={() => handleLinkClick(icon.link)}
              >
                <span>{React.createElement(icon.icon, { size: "20" })}</span>
                <h2 style={{ transitionDelay: `${i + 3}00ms` }} className={`whitespace-pre duration-500 ${!open && "opacity-10 translate-x-28 overflow-hidden"}`}>
                  {icon.name}
                </h2>
              </div>
            </Link>
          ))}
          <div className={`group flex items-center text-ml  gap-3.5 font-medium p-2 hover:bg-hoverblue rounded-md mt-32`} onClick={handleLogout}>
            <span className="text-xl"><HiOutlineLogout /></span>
            <h2 style={{ transitionDelay: `${icons.length + 3}00ms` }} className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
              Log Out
            </h2>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-lg font-medium pb-6 mt-5 pb-5">Are you sure you want to log out of your account?</h2>
            <div className="flex mt-1 pb-6">
              <button className="px-16 py-3 ml-3 font-bold rounded-md bg-white border-2 border-mainblue text-mainblue  hover:border-opacity-75" onClick={handleCancel}>Cancel</button>
              <button className="px-16 py-3 ml-3 font-bold rounded-md bg-mainblue text-white hover:bg-opacity-75" onClick={handleContinue}>Continue</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
