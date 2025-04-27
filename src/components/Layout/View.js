import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Layout({hide_image=false,stay=false, children}) {


  // toggle default -> white theme
  const [toggle, setToggle] = useState(false);
  const toggleTheme = () => {
    setToggle(!toggle);
  };

  const setTheme = () => {
    if (toggle) {
      // If toggle is true, set the background to black
      document.documentElement.style.setProperty("--bg-color", "#000000");
      document.documentElement.style.setProperty("--color", "#ffffff");
    } else {
      // If toggle is false, set the background to white
      document.documentElement.style.setProperty("--bg-color", "#ffffff");
      document.documentElement.style.setProperty("--color", "#000000");
    }
  };

  useEffect(()=>{
    if(localStorage.getItem('token')){
    }
  }, [])

  return (
    <>
      <ToastContainer />
      <div className="shadow-right h-[100vh] relative">
        <Navbar toggle={toggle} toggleTheme={toggleTheme}/>
        <main id="popup"className="mt-[5rem]">
          { children }
        </main>
        <Footer/>
      </div>
    </>
  );
}
