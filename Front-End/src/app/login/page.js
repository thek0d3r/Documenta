import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import backIcon from "../../../public/back.png"

export default function LoginPage(){

    return(
        <div className="w-[100%] h-[100vh] flex flex-col">
            <div className="min-w-[350px] w-[20%] h-[100%] bg-neutral-200 rounded-lg p-0">
                <Link href="/" className="w-[20px] h-[20px] m-5">
                    <Image src={backIcon} width={20} height={20} className="opacity-30"/>
                </Link>
            </div>
        </div>
    )
}