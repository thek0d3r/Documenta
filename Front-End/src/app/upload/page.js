"use client"
import Image from "next/image";
import Logo from '../../../public/logo.svg'
import Navbar from "../Navbar/Navbar"

export default function UploadPage(){

    function handleFile(e){
        console.log(e.target.files);
    }
    async function sendFormToServer(){
        const res = fetch('documenta.cyberdojotm.ro:3000/people/')
    }
    return(
        <section className="w-[100vw] h-[100vh] bg-blue-900 flex flex-col items-center justify-center gap-[20px]">
            <div id="background-gradient" className='z-0 invert'></div>
            <Image src={Logo} width={250} height={250} alt="Logo" className="p-0 px-[10px] m-0 mt-[10px] top-50 saturate-0 invert brightness-100"/>
            <div className="bg-neutral-200 flex flex-col items-center justify-center py-5 gap-[5px] rounded-lg">
                <input type='text' placeholder="CNP-ul deținătorului" className="min-w-[200px] w-[90%] h-[50px] p-[5px] text-black focus:outline-0 border-2 border-neutral-200 rounded-lg text-lg"></input>
                <input type='text' placeholder="Numele documentului" className="min-w-[200px] w-[90%] h-[50px] p-[5px] text-black focus:outline-0 border-2 border-neutral-200 rounded-lg text-lg"></input>
                <input type='file' onCapture={handleFile} placeholder="" className="min-w-[200px] w-[90%] h-[50px] p-[5px] text-black rounded-lg text-lg"></input>
                <select className="min-w-[200px] w-[90%] h-[35px] text-black focus:outline-0 border-2 border-neutral-200 rounded-lg text-lg">
                    <option value="carte de identitate">Carte de identitate</option>
                    <option value="certificat">Certificat de naștere</option>
                    <option value="certificat">Certificat de deces</option>
                    <option value="certificat">Certificat de căsătorie</option>
                    <option value="certificat">Pașaport</option>
                    <option value="certificat">Permis</option>
                    <option value="certificat">Carte funciară</option>
                    <option value="certificat">Declarație de avere</option>
                </select>
                    <button onClick={sendFormToServer}>

                    </button>
            </div>
        </section>
    )
}