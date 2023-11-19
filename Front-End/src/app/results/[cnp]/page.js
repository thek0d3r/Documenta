"use client"
import { useRouter } from "next/navigation";
import Navbar from "../../Navbar/Navbar";
import SearchCNP from "../../Search/search";
import uploadImage from "../../../../public/upload.png"
import downloadImage from "../../../../public/download.png"
import Image from "next/image";

import { useEffect, useState } from "react";


export default function Results({params}){
    const router=useRouter();
    const [lookUp, setLookUp]=useState({
        // person:{
        //     id:"NmNlYjRiN2EtNTMyNi00ZTRlLWFlMTEtOGY5ZDNkYmZlMjUy",
        //     cnp:"5040525350048",
        //     nume:"Szabo",
        //     prenume:"Aleks"
        // },
        // id:"6ceb4b7a-5326-4e4e-ae11-8f9d3dbfe252",
        // "documents":{"cfc15005-af51-4632-9bd6-d5eca9f6d17b":{"id":"Y2ZjMTUwMDUtYWY1MS00NjMyLTliZDYtZDVlY2E5ZjZkMTdi","person":"VEVTVF9OQU1F","document_name":"TEST_HASH","document_hash":"6ceb4b7a-5326-4e4e-ae11-8f9d3dbfe252"}}
    
    });

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

    function downloadFiles(){

    }

    useEffect(()=>{
        if(validareCNP(params.cnp)==false)
            router.replace('/');
        else{
            const res=fetch(`https://documenta.cyberdojotm.ro/api/people/${params.cnp}`);
            res.then((e)=>{
                e.json().then((json)=>{
                    fetch(`https://documenta.cyberdojotm.ro/api/people/${json.id}/documents`).then(response=>{
                        response.json().then(json2=>{
                            setLookUp({
                                id:json.id,
                                person:json.person,
                                documents:json2.documents
                            })
                        })
                    })
                });
            }).catch(err=>{
                console.error(err);
            })
        }
    },[])
    useEffect(()=>{
        console.log(lookUp);
    }, lookUp)
        return(
            <div className="flex flex-row justify-start">
                <div id="background-gradient" className='z-0'></div>
                <Navbar/>  
                <section id="results-page" className="flex w-[fill] h-[100px] flex-col align-center">
                    <div className="flex w-[100%] justify-center">
                        <SearchCNP/>
                    </div>
                    <div className="flex w-[90%] flex-row items-center justify-between">
                        <h3 className="text-black text-3xl font-['Helvetica'] font-bold m-10">{lookUp.person?.prenume}, {lookUp.person?.nume}</h3>
                        <div className="bg-blue-900 flex flex-col items-center gap-[5px] rounded-lg p-[20px]">
                            <span className="text-neutral-200 text-xl">Panou administrativ</span>
                            <div className="flex flex-row text-neutral-200 items-center gap-[10px] hover:cursor-pointer hover:bg-neutral-200 hover:text-blue-900 rounded-lg p-[5px]" onClick={goToUpload}>
                                <Image src={uploadImage} width={25} height={25} alt="Urcare fișier" className="mix-blend-color-burn"/>
                                <span className="text-lg">Încărcați documente</span>
                            </div>
                            <div className="flex flex-row text-neutral-200 items-center gap-[10px] hover:cursor-pointer hover:bg-neutral-200 hover:text-blue-900 rounded-lg p-[5px]" onClick={downloadFiles}>
                                <Image src={downloadImage} width={25} height={25} alt="Descărcare fișier" className="mix-blend-color-burn"/>
                                <span className="text-lg">Descărcați documente</span>
                            </div>
                        </div>
                    </div>
                    <section id="documents" className="flex flex-col mx-10 justify-center">
                        {(lookUp.documents!=undefined)? Object.keys(lookUp.documents).map((e, index)=>{
                            let docName="document_name";
                            console.log(e, e["id"], e.docName, lookUp.documents);
                            if(index%2==0)
                                return(
                                    <div key={index} className="flex w-[90%]">
                                        <div className="flex items-center justify-center px-5 rounded-lg w-[40px] h-[40px] text-center mr-[5px] text-blue-900 bg-neutral-200 mb-[5px] text-lg">{index}</div>
                                        <div className="flex items-center px-5 rounded-lg  h-[40px] text-blue-900 bg-neutral-200 mb-[5px] text-lg">{lookUp.documents?.e.docName}</div>
                                    </div>
                                )
                            return(
                                <div key={index} className="flex w-[90%]">
                                        <div className="flex items-center justify-center px-5 rounded-lg w-[40px] h-[40px] text-center mr-[5px] text-neutral-100 bg-blue-900 mb-[5px] text-lg">{index}</div>
                                        <div className="flex items-center px-5 rounded-lg  h-[40px] text-neutral-100 bg-blue-900 mb-[5px] text-lg">{lookUp.documents?.e.docName}</div>
                                </div>
                            )
                        }):false}
                    </section>
                </section>
            </div>
        )
} 