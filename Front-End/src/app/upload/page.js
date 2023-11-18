"use client"
import Navbar from "../Navbar/Navbar"

export default function UploadPage(){

    function handleFile(e){
        console.log(e.target.files);
    }

    return(
        <div className="w-[100vw] h-[100vh] bg-blue-900 flex flex-col">
                <input type='text' placeholder="Numele documentului" className="min-w-[200px] w-[20%] h-[35px] p-[5px] text-black focus:outline-0 border-2 border-neutral-200 rounded-lg"></input>
                <input type='file' onCapture={handleFile} placeholder=""></input>
            <div id="background-gradient" className='z-0 invert'>
            </div>
        </div>
    )
}