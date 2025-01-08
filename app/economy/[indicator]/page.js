import CountryData from "../../../country-data/country-data.json"
import { redirect } from "next/navigation"

import Indicator from "../../components/indicator"

const ValidIndicators = [
    "Gdp per capita",
    "Gdp per capita PPP",
    "Net average wage",
    "Unemployment",
    "Home affordability",
    "Gdp growth past 5 years",
    "Debt to gdp",
    "Corporate tax",
    "Capital gains tax",
    "Value added tax",
    "R&D (Innovation) to gdp"
]

function IsValidIndicator(indicator){
  let valid = false
  
  ValidIndicators.forEach(validIndicator => {
    if(validIndicator.toLowerCase().replace(/ /g, "-") == indicator.toLowerCase().replace(/ /g, "-")){
      valid = true
    }
  });
  
  return valid
}
  
function FirstLetterToCapital(country){
  return ((country.charAt(0).toUpperCase()) + (country.substring(1)))
}

export default async function IndicatorPage({params}){
  let {indicator} = await params
  if(indicator == "rd-innovation-to-gdp"){
    indicator = "R&D (Innovation) to gdp"
  }
    
  return(
    <>
      {IsValidIndicator(indicator) ? <Indicator Indicator={FirstLetterToCapital(indicator)}/> : redirect("/economy") }
    </>
  )
}