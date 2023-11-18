import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import backIcon from "../../../public/back.png"

export default function LoginPage(){

    return(
        <div className="w-[100%] h-[600px] flex items-center flex-col">
            <div className="min-w-[350px] w-[20%] h-[100%] p-5 bg-neutral-200 m-10 rounded-lg">
                
                <Link href="/" className="w-[20px] h-[20px]">
                    <Image src={backIcon} width={20} height={20} className="opacity-30"/>
                </Link>
                                    
            </div>
        </div>
    )
}