"use client"
import Image from "next/image"
import { useRef } from "react";
import searchIcon from "../../../public/search-icon.png"
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function SearchCNP(){
    const cnpInput = useRef();
    const router = useRouter();

    async function getData(cnp){
      const res = await fetch(`http://127.0.0.1:3000/people/${cnp}`, {mode:"no-cors"}).then((e)=>{
        router.push(`/results/${cnp}`);
      }).catch((err)=>{
        console.error(err);
      })
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
          getData(cnp);
          cnpInput.current.value="";
          //make request  
          //swap to documents page
      }
  
  }
    function handleInput(e){
        if(e.key != Number(e.key)){
          if(e.ctrlKey==false && e.shiftKey==false && e.altKey==false && e.key!="ArrowLeft" && e.key!="ArrowRight" && e.key!="ArrowUp" && e.key!="ArrowDown" && e.key!="Backspace" && e.key!="Enter"){
            if(e.keyCode < 48 || e.keyCode>57)
              e.preventDefault();
          }
        }
        if(e.key==="Enter"){
          validareCNP(e.target.value);
        }
    }

    return(
        <div className="flex align-center mt-5 overflow-hidden">
            <input className="rounded-lg text-black focus:outline-0 outline-0 focus:border-2 focus:border-gray-200 px-[10px] border-2 border-gray-200 min-w-[300px] w-[45%] h-[50px] text-xl" onKeyDown={handleInput} onPaste={handleInput} ref={cnpInput} placeholder="Caută după CNP..."></input>
            <Link href="/results">
              <button onClick={()=>{validareCNP(cnpInput.current.value)}} className="h-[100%] w-[20px]">
                <Image src={searchIcon} height={20} width={20} className="opacity-60 relative left-[-30px]"/>
              </button>
            </Link>
      </div>
    )
}