'use client'

import Leaderboard from "./leaderboard"
import EconomyScoreFormula from "../lib/score-formulas"

import CountryData from "../../country-data/country-data.json"

export default function OwnScore(props){
    const Order =  props.Order
    const Category = props.Category 

    const Units =  ""
    let data = {
        units: Units,
        order: Order,
        headers: ["Rank","Country","Score (Max 100)"],
        body: []
    }
    
    function getData(category){
        let data_to_return = []
        const countries = Object.keys(CountryData)

        countries.forEach(country => {
            if(category == "Economy"){
                data_to_return.push([1,CountryData[country]["Icon"] + " " + country, EconomyScoreFormula(country)])
            }
        });

        return data_to_return
    }

    data.body = getData(Category)

    return(
            <Leaderboard height={510} data={data} />            
    )
}