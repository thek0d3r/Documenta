"use client"
import Image from "next/image";
import Logo from '../../../../public/logo.svg'
import Navbar from "../../Navbar/Navbar"
import backIcon from '../../../../public/back.png'
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function UploadPage({params}){

    const [file, setFile] = useState(null);
    const router = useRouter();
    
    function handleFile(e){
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
    }

    async function sendFormToServer() {
        const formData = new FormData();
        formData.append("fileUpload", file);
        formData.append("person_id", params.uuid);

        try {
            const response = await fetch(`/api/people/${params.uuid}/document`, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            console.log("File uploaded successfully");
            router.replace('/');
            
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    }

    return(
        <section className="w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-[20px]">
            <div id="background-gradient-2" className='z-0 invert'></div>
          
            <Image src={Logo} width={250} height={250} alt="Logo" className="p-0 px-[10px] m-0 mt-[10px] top-50 saturate-0 invert brightness-100 drop-shadow-lg"/>
            <div className="bg-neutral-100 drop-shadow-2xl  flex flex-col items-center justify-center py-[10px] gap-[5px] rounded-lg">
                <div className="flex w-[100%]">
                    <Link href="/" className="w-[20px] h-[20px] m-5">
                            <Image src={backIcon} width={20} height={20} className="opacity-30"/>
                    </Link>
                </div>
                <input type='file' onChangeCapture={handleFile} placeholder="" className="min-w-[200px] w-[90%] h-[50px] m-0 p-[2px] text-black rounded-lg text-lg"></input>
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
                    <button onClick={sendFormToServer} className="p-[5px] px-10 bg-neutral-200 text-black hover:text-neutral-200 hover:bg-blue-900 rounded-lg">Upload</button>
            </div>
        </section>
    )
}