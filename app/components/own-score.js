'use client'

import Leaderboard from "./leaderboard"
import {EconomyScoreFormula, SocietyScoreFormula} from "../lib/score-formulas"

import CountryData from "../../country-data/country-data.json"

export default function OwnScore(props){
    const Order =  props.Order
    const Category = props.Category 
    const Captions = props.Captions

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
            else if(category == "Society"){
                data_to_return.push([1,CountryData[country]["Icon"] + " " + country, SocietyScoreFormula(country)])
            }
            else if(category == "Overall"){
                data_to_return.push([1,CountryData[country]["Icon"] + " " + country, (Math.ceil((SocietyScoreFormula(country) / 2) + (EconomyScoreFormula(country) / 2)))])
            }
        });

        return data_to_return
    }

    data.body = getData(Category)

    return(
            <Leaderboard height={510} data={data} caption={Captions} />            
    )
}