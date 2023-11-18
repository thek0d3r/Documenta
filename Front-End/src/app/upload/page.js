"use client"
import Image from "next/image";
import Logo from '../../../public/logo.svg'
import Navbar from "../Navbar/Navbar"

export default function UploadPage(){

    function handleFile(e){
        console.log(e.target.files);
    }

    return(
        <section className="w-[100vw] h-[100vh] bg-blue-900 flex flex-col items-center justify-center">
            <Image src={Logo} width={250} height={250} alt="Logo" className="p-0 px-[10px] m-0 mt-[10px] top-50 saturate-0 invert brightness-100"/>
            <div className="bg-neutral-200 flex flex-col items-center justify-center py-20 gap-[10px]">
                <div id="background-gradient" className='z-0 invert'></div>
                <input type='text' placeholder="CNP-ul deținătorului" className="min-w-[200px] w-[20%] h-[35px] p-[5px] text-black focus:outline-0 border-2 border-neutral-200 rounded-lg"></input>
                    <input type='text' placeholder="Numele documentului" className="min-w-[200px] w-[20%] h-[35px] p-[5px] text-black focus:outline-0 border-2 border-neutral-200 rounded-lg"></input>
                    <input type='file' onCapture={handleFile} placeholder="" className="min-w-[200px] w-[20%] h-[35px] p-[5px] text-white rounded-lg"></input>
                    <select className="min-w-[200px] w-[20%] h-[35px] p-[5px] text-black focus:outline-0 border-2 border-neutral-200 rounded-lg">
                        <option value="carte de identitate">Carte de identitate</option>
                        <option value="certificat">Certificat de naștere</option>
                        <option value="certificat">Certificat de deces</option>
                        <option value="certificat">Certificat de căsătorie</option>
                        <option value="certificat">Pașaport</option>
                        <option value="certificat">Permis</option>
                        <option value="certificat">Carte funciară</option>
                        <option value="certificat">Declarație de avere</option>
                    </select>
            </div>
        </section>
    )
}