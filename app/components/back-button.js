'use client'

import { useRouter } from "next/navigation";

import { IoArrowBack } from "react-icons/io5";

import { Button } from "@mantine/core";


export default function BackButton(props){
    const router = useRouter()

    return(
        <Button 
            onClick={()=>{router.push(props.Url)}} 
            variant="filled" 
            color='main'
            w={"100px"}
            mb={"lg"}
            pl={"0px"}
            >
                <IoArrowBack style={{marginRight: "14px", marginBottom: "2px", fontSize: "20px"} }/>
                    Back
            </Button>
    )
}