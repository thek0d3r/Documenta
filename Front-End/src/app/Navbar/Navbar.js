"use client"

import { useState } from "react"
import Image from "next/image"
import uploadImage from "../../../public/upload.png"
// import profilePic from "../../../public/user.png"
import Router, { useRouter } from "next/navigation"
import Logo from '../../../public/logo.svg'
import navbar from "./navbar.module.css"
import Link from "next/link"

function UserMenu({menu, isLoggedIn}){
  const [options, setOptions]=(isLoggedIn)? useState(["Profil", "Setări", "Delogare"]) : useState(["Logare", "Auth"]);
  const [paths, setPaths]=(isLoggedIn)? useState(["/profile", "/settings", "/"]) : useState(["/login", "/authenticate"]);
  const [menuHeight, setMenuHeight] = isLoggedIn? useState("bg-blue-900 h-[150px]"):useState("bg-blue-900 h-[120px]");
  if(menu===true)
  return(
<ul id={navbar.options} className={menuHeight}>
            {options.map((element, index)=>{
              return(
                <li key={index} className="w-[90%] hover:bg-white hover:text-black text-white hover:cursor-pointer rounded-lg">
                    <Link href={paths[index]}>
                      {element}
                  </Link>
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
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  function showUserMenu(e){
    setShowMenu(true);
  }
  function hideUserMenu(e){
    setShowMenu(false);
  }

  function goToUpload(){
    router.push("/upload"); 
  }

  
  return (
      <nav id={navbar.main} className="flex flex-col items-center justify-start w-[20%] min-w-[350px] h-[100vh] rounded-xl rounded-l-none bg-blue-900 border-t-0 p-5">
        <div className="flex flex-col w-[100%] h-[100%] items-center">
          <Image src={Logo} width={250} height={250} alt="Logo" className="p-0 px-[10px] m-0 mt-[10px] top-50 saturate-0 invert brightness-100"/>
        </div>
        <div className="flex flex-row items-center gap-[10px] hover:cursor-pointer" onClick={goToUpload}>
            <Image src={uploadImage} width={25} height={25} alt="Upload files" className="invert"/>
            <span className="text-white text-lg">Încărcați documente</span>
        </div>
        {/* <div id="profile-button" className="flex flex-col justify-center align-center rounded-full relative left-[3%] w-[100px] h-[100px] top-[-50%] z-2 border-8 border-white hover:border-blue-900" onMouseOver={showUserMenu} onMouseLeave={hideUserMenu}>
          <UserMenu menu={showMenu} isLoggedIn={isLoggedIn}/>
          <div id="profile-picture" className={"hover:cursor-pointer w-[200px] h-[200px]"}>
            <Image width={200} height={200} src={profilePic} alt="Profile picture" className="rounded-full absolute top-0"/>
          </div>
        </div> */}


      </nav>
  )
}
