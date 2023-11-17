"use client"

import { useState } from "react"
import Image from "next/image"
import profilePic from "./pfp.png"
import Logo from '../../../public/logo.svg'
import navbar from "./navbar.module.css"

function UserMenu({menu}){
  const [options, setOptions]=useState(["Profil", "Setări", "Delogare"]);
  if(menu===true)
    return(
          <ul id={navbar.options} className="bg-gray-200 h-[400px]">
            {options.map((element, index)=>{
              return(
                <li key={index} className="w-[90%] hover:bg-white text-black hover:cursor-pointer rounded-lg">
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
    <main className="flex flex-col items-center m-0 mt-2 p-0">
      <div id={navbar.main} className="flex flex-row align-center w-[65%] h-[50px] rounded-xl bg-gray-200 border-2 border-t-0 mt-[20px]">
        <div className="w-[90%] relative top-[10%] left-[1%]">
          <Image src={Logo} width={200} height={200} alt="Logo" className="p-0 m-0 absolute top-50"/>
        </div>
        <div id="profile-button" className="flex flex-col justify-center align-center rounded-full relative left-[3%] w-[100px] h-[100px] top-[-50%] z-2 border-8 border-white hover:border-gray-200 " onMouseOver={showUserMenu} onMouseLeave={hideUserMenu}>
          <UserMenu menu={showMenu}/>
          <div id="profile-picture" className={"hover:cursor-pointer"}>
            <Image width={200} height={200} src={profilePic} alt="PFP" className="rounded-full absolute top-0"/>
          </div>
        </div>
      </div>
    </main>
  )
}
