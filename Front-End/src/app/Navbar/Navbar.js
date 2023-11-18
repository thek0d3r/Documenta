"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import profilePic from "../../../public/user.png"
import searchIcon from "../../../public/search-icon.png"
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
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const cnpInput = useRef();
  function showUserMenu(e){
    setShowMenu(true);
  }
  function hideUserMenu(e){
    setShowMenu(false);
  }
  function handleInput(e){
    if(e.key != Number(e.key)){
      if(e.ctrlKey==false && e.shiftKey==false && e.altKey==false && e.key!="ArrowLeft" && e.key!="ArrowRight" && e.key!="ArrowUp" && e.key!="ArrowDown" && e.key!="Backspace" && e.key!="Enter"){
        if(e.keyCode < 48 || e.keyCode>57)
          e.preventDefault();
      }
    }
    if(e.key==="Enter")
    validareCNP(e.target.value);
}
function validareCNP(cnp){
    cnpInput.current.value=cnpInput.current.value.replace(/[^0-9]/gi,'');
      const CONTROL=cnp%10;
      const COMPARISON=279146352798;
      let sum = 0;
      for(let i=13;i>1;i--){
        let digit=Math.pow(10,i-1);
        let cnpDigit = Math.floor(cnp/digit%10);
        let controlDigit = Math.floor(COMPARISON*10/digit%10);
        sum+=cnpDigit*controlDigit;
      }
      if(sum%11==CONTROL){
        console.log("VALID!");
        cnpInput.current.value="";
        //make request  
        //swap to documents page
      }

    }
  
  return (
    <main className="flex flex-col items-center m-0 mt-2 p-0">
      <nav id={navbar.main} className="flex flex-row align-center w-[65%] h-[50px] rounded-xl bg-blue-900 border-2 border-t-0 mt-[20px]">
        <div className="flex w-[90%] h-[100%] w-min-[400px] flex-row items-center justify-between">
          <Image src={Logo} width={200} height={200} alt="Logo" className="p-0 px-[10px] m-0 mt-[5px] top-50 saturate-0 invert brightness-100"/>
          <div className="flex align-center">
            <input className="rounded-lg h-[30px] text-black focus:outline-0 px-[10px] border-2 border-gray-200" onKeyDown={handleInput} onPaste={handleInput} ref={cnpInput} placeholder="Caută prin CNP..."></input>
            <button onClick={()=>{validareCNP(cnpInput.value)}}><Image src={searchIcon} height={20} width={20} className="opacity-60 relative left-[-30px]"/></button>
          </div>
        </div>
        <div id="profile-button" className="flex flex-col justify-center align-center rounded-full relative left-[3%] w-[100px] h-[100px] top-[-50%] z-2 border-8 border-white hover:border-blue-900" onMouseOver={showUserMenu} onMouseLeave={hideUserMenu}>
          <UserMenu menu={showMenu} isLoggedIn={isLoggedIn}/>
          <div id="profile-picture" className={"hover:cursor-pointer w-[200px] h-[200px]"}>
            <Image width={200} height={200} src={profilePic} alt="Profile picture" className="rounded-full absolute top-0"/>
          </div>
        </div>
      </nav>
    </main>
  )
}
