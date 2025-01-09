import Leaderboard from "./leaderboard"
import CountryData from "../../country-data/country-data.json"

export default function Indicator(props){
    const Year =  props.Year
    const Indicator = props.Indicator
    const Order =  props.Order
    const DecimalPlaces = props.DecimalPlaces
    const Units =  props.Units

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
            <Leaderboard height={500} data={data} />            
        </>
    )
}