'use client'

import Leaderboard from "./leaderboard"
import CountryData from "../../country-data/country-data.json"
import { Button } from "@mantine/core"
import { useRouter } from "next/navigation"


export default function Indicator(props){
    const Year =  props.Year
    const Indicator = props.Indicator
    const Order =  props.Order
    const DecimalPlaces = props.DecimalPlaces
    const Units =  props.Units

    const PrevPage = props.PrevPage

    const router = useRouter()

    let data = {
        units: Units,
        order: Order,
        headers: ["Rank","Country",Indicator],
        body: []
    }
    
    function getData(indicator, year){
        let data_to_return = []
        const countries = Object.keys(CountryData)

        countries.forEach(country => {
            data_to_return.push([1,CountryData[country]["Icon"] + " " + country, CountryData[country][year][indicator].toFixed(DecimalPlaces)])
        });

        return data_to_return
    }

    data.body = getData(Indicator,Year.toString())

    return(
        <>
            <Button 
            onClick={()=>{router.push(PrevPage)}} 
            variant="filled" 
            color='main'
            w={"100px"}
            mb={"lg"}>
                Back
            </Button>
            <Leaderboard height={515} data={data} />            
        </>
    )
}