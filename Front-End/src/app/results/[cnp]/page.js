"use client"
import { useRouter } from "next/navigation";
import Navbar from "../../Navbar/Navbar";
import SearchCNP from "../../Search/search";
import uploadImage from "../../../../public/upload.png"
import Image from "next/image";

import { useEffect, useState } from "react";


export default function Results({params}){
    const router=useRouter();
    const [lookUp, setLookUp]=useState({});

    function validareCNP(cnp){
        cnp=cnp.replace(/[^0-9]/gi,'');
        const CONTROL=cnp%10;
        const COMPARISON=279146358279;
        let sum = 0;
        for(let i=13;i>1;i--){
            let digit=Math.pow(10,i-1);
            let cnpDigit = Math.floor(cnp/digit%10);
            let controlDigit = Math.floor(COMPARISON*10/digit%10);
            sum+=cnpDigit*controlDigit;
        }
        if(sum%11==CONTROL)
            return true;
        return false;
    }
    
    function goToUpload(){
        router.push("/upload"); 
      }    

    useEffect(()=>{
        if(validareCNP(params.cnp)==false)
            router.replace('/');
        else{
            const res=fetch(`https://documenta.cyberdojotm.ro/api/people/${params.cnp}`);
            res.then((e)=>{
                e.json().then((json)=>{
                    const fetch2=fetch(`https://documenta.cyberdojotm.ro/api/people/${json.id}/documents`).then(response=>{
                        setLookUp({
                            id:json.id,
                            person:json.person,
                            documents:response.json().documents
                        });
                    })
                    console.log(json);
                });
            }).catch(err=>{
                console.error(err);
            })
        }
    },[])
        return(
            <div className="flex flex-row justify-start">
                <div id="background-gradient" className='z-0'></div>
                <Navbar/>  
                <section id="results-page" className="flex w-[fill] h-[100px] flex-col align-center">
                    <div className="flex w-[100%] justify-center">
                        <SearchCNP/>
                    </div>
                    <div className="flex w-[80%] flex-row items-center">
                        <h3 className="text-black text-3xl font-['Helvetica'] font-bold m-10">{lookUp.nume}, {lookUp.prenume}</h3>
                        <div className="flex flex-row items-center gap-[10px] hover:cursor-pointer" onClick={goToUpload}>
                            <Image src={uploadImage} width={25} height={25} alt="Upload files" className=""/>
                            <span className="text-black text-lg">Încărcați documente</span>
                        </div>
                    </div>
                    {/* <section id="documents" className="flex flex-col mx-10 justify-center">
                        {Object.keys(lookUp.person.documents).map((e, index)=>{
                            if(index%2==0)
                                return(
                                    <div key={index} className="flex w-[90%]">
                                        <div className="flex items-center justify-center px-5 rounded-lg w-[40px] h-[40px] text-center mr-[5px] text-blue-900 bg-neutral-200 mb-[5px] text-lg">{index}</div>
                                        <div className="flex items-center px-5 rounded-lg  h-[40px] text-blue-900 bg-neutral-200 mb-[5px] text-lg">{lookUp.person.documents[e]["document_name"]}</div>
                                    </div>
                                )
                            return(
                                <div key={index} className="flex w-[90%]">
                                        <div className="flex items-center justify-center px-5 rounded-lg w-[40px] h-[40px] text-center mr-[5px] text-neutral-100 bg-blue-900 mb-[5px] text-lg">{index}</div>
                                        <div className="flex items-center px-5 rounded-lg  h-[40px] text-neutral-100 bg-blue-900 mb-[5px] text-lg">{lookUp.person.documents[e]["document_name"]}</div>
                                </div>
                            )
                        })}
                    </section> */}
                </section>
            </div>
        )
} 