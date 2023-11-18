import Link from "next/link";
import Navbar from "./Navbar/Navbar";
import SearchCNP from "./Search/search";

export default function App(){
    return(  
    <>
          <div className="flex flex-row justify-start">
            <div id="background-gradient" className='z-0'></div>
            <Navbar/>  
            <div className="flex w-[100%] h-[100px] flex-col items-center">
                <SearchCNP/>
            </div>
        </div>
    </>
    )
}