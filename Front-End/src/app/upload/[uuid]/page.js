"use client"
import Image from "next/image";
import Logo from '../../../public/logo.svg'
<Image src={Logo} width={250} height={250} alt="Logo" className="p-0 px-[10px] m-0 mt-[10px] top-50 saturate-0 invert brightness-100 drop-shadow-lg"/>
import Navbar from "../../Navbar/Navbar"
import backIcon from '../../../public/back.png'
import Link from "next/link";
import axios from "axios";
import { useState } from "react";

export default function UploadPage({params}){

    const [file, setFile] = useState(null);
    
    function handleFile(e){
        setFile(e.target.files[0]);
    }
    async function sendFormToServer(){
        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post(`https://documenta.coderdojotm.ro/api/people/${params.uuid}/document`, formData, {
                headers: {
                    'Content-Type': 'fileUpload',
                },
            });
            console.log('File uploaded successfully');
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };
    return(
        <section className="w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-[20px]">
            <div id="background-gradient-2" className='z-0 invert'></div>
          
            <div className="bg-neutral-100 drop-shadow-2xl flex flex-col items-center justify-center py-5 gap-[5px] rounded-lg">
                <Link href="/" className="w-[20px] h-[20px] m-5">
                        <Image src={backIcon} width={20} height={20} className="opacity-30"/>
                </Link>
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