"use client"
import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import backIcon from "../../../public/back.png"
import Logo from '../../../public/logo.svg'
import { useRouter } from "next/navigation";

export default function LoginPage(){
    const router=useRouter();
    return(
        <div className="w-[100%] h-[100vh] flex flex-col items-center justify-center gap-[10px]">
            <Image src={Logo} width={250} height={250} alt="Logo" className="p-0 px-[10px] m-0 mt-[10px] top-50 saturate-0 invert brightness-100 drop-shadow-lg"/>
            <div id="background-gradient-2" className='z-0 invert'></div>
            <div className="bg-neutral-100 drop-shadow-2xl flex flex-col w-[20%] min-w-[400px] items-center py-5 gap-[5px] rounded-lg">
                <div className="w-[100%] h-[20px] m-5 flex items-start px-5">
                    <Link href='/'>
                        <Image src={backIcon} width={20} height={20} className="opacity-30 hover:cursor-pointer"/>
                    </Link>
                    <span>Adaugă deținător</span>
                </div>
                <input type='text' placeholder="Nume de utilizator" className="min-w-[200px] w-[90%] h-[50px] p-[5px] text-black focus:outline-0 border-2 border-neutral-200 rounded-lg text-lg"></input>
                <input type='password' placeholder="Parolă" className="min-w-[200px] w-[90%] h-[50px] p-[5px] text-black focus:outline-0 border-2 border-neutral-200 rounded-lg text-lg"></input>
                <div className="w-[100%] h-[20px] m-5 flex items-center justify-end px-5">
                    <button className="rounded-lg text-black bg-neutral-200 hover:text-neutral-200 hover:bg-blue-900 p-[5px] px-10">Submit</button>
                </div>
            </div>
        </div>
    )
}