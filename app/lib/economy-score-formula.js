import CountryData from "../../country-data/country-data.json"

function FindBestValue(indicator){
    const countries = Object.keys(CountryData)

    countries.forEach(element => {
        
    });
}

export default function EconomyScoreFormula(country){
    // 10 gpd per capita ppp 
    // 20 unemployment
    // 5 debt to gdp 
    // 5  R&D (Innovation) to gdp
    // 10 taxes capital gains + value added tax + corporate tax

    // 20 net average wage
    // 20 house price to wage
    // 10 gdp growth past 5 years

    // best value is max score for that category, t
    // then calculate how % of that is the country score and add it 
}