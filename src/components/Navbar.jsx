import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const NavbarMenu = [
 
  { id: 1, title: "About Us", section: "aboutUsRef" },
  { id: 2, title: "Why Us", section: "whyUsRef" },
  { id: 3, title: "Testimonials", section: "testimonialsRef" },
  { id: 4, title: "Contact Us", section: "footerRef" },
];

const Navbar = ({ scrollToSection }) => {
    
const navigate = useNavigate() 
     
  const handleClick= ()=>{
        navigate("/sign-up")
  }
  return (
    // <nav className=" p-3 rounded-3xl z-20 bg-slate-800 text-white fixed top-0 right-0">
    //   <motion.div
    //     initial={{ opacity: 0, y: -50 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     className="container py-10 flex justify-between items-center"
    //   >
    //     <div>
    //       <h1 className="font-bold text-2xl">Expert Educational Consultancy</h1>
    //     </div>
    //     <div className="hidden lg:block">
    //       <ul className="flex items-center gap-3">
    //         {NavbarMenu.map((menu) => (
    //           <li key={menu.id}>
    //             <button
    //               onClick={() => menu.section && scrollToSection(menu.section)}
    //               className="inline-block py-2 px-3 hover:text-secondary relative group"
    //             >
    //               {menu.title}
    //             </button>
    //           </li>
    //         ))}
    //         <button className="primary-btn">Sign In</button>
    //       </ul>
    //     </div>
    //     <div className="lg:hidden">
    //       <IoMdMenu className="text-4xl" />
    //     </div>
    //   </motion.div>
    // </nav>
    <nav className="fixed top-0 left-0 text-xl right-0 z-20 p-7 bg-slate-900/95 backdrop-blur-sm">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-4 flex justify-between items-center"
    >
      <div>
        <h1 className="font-bold text-3xl text-white">Expert Educational Consultancy</h1>
      </div>
      <div className="hidden lg:block">
        <ul className="flex items-center gap-6 p-3 text-3xl ">
          {NavbarMenu.map((menu) => (
            <li key={menu.id}>
              <button
                onClick={() => menu.section && scrollToSection(menu.section)}
                className="text-gray-300  hover:text-white transition-colors duration-200"
              >
                {menu.title}
              </button>
            </li>
          ))}
          <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200" onClick={handleClick}>
            Get Started!
          </button>
        </ul>
      </div>
      <button className="lg:hidden text-white">
        <IoMdMenu className="text-2xl" />
      </button>
    </motion.div>
  </nav>
  );
};

export default Navbar;
