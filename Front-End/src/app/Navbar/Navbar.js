"use client"

import { useState } from "react"
import Image from "next/image"
import profilePic from "./pfp.png"
import navbar from "./navbar.module.css"

function UserMenu({menu}){
  const [options, setOptions]=useState(["Profil", "Setări", "Delogare"]);
  if(menu===true)
    return(
          <ul id={navbar.options} className="flex justify-end absolute top-[50%] hover:top-[80%] text-center align-center left-[-10%] flex-col z-0 p-0 rounded-xl bg-gray-500 w-[100px] text-gray-600">
            {options.map((element, index)=>{
              return(
                <li key={index} className="w-100 hover:bg-white hover:cursor-pointer">
                  {element}
                </li>
              )
            })}
          </ul>
    )
  return (
    <></>
  )
}

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function showUserMenu(e){
    setShowMenu(true);
  }
  function hideUserMenu(e){
    setShowMenu(false);
  }

  return (
    <main className="flex min-h-screen flex-col items-center m-0 p-0">
      <div className="flex flex-row justify-end align-center w-[65%] h-[50px] bg-gray-500 rounded-xl border-2 border-t-0 mt-[20px]">
        <div id="profile-button" className="flex flex-col align-center rounded-full relative left-[3%] w-[100px] h-[100px] top-[-50%] z-0 border-8 border-white hover:border-gray-500 " onMouseOver={showUserMenu} onMouseLeave={hideUserMenu}>
          <UserMenu menu={showMenu}/>
          <div id="profile-picture" className={"hover:cursor-pointer z-10"} >
            <Image width={120} height={120} src={profilePic} alt="PFP" className="rounded-full"/>
          </div>
        </div>
      </div>
    </main>
  )
}
