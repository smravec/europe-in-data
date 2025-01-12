import { redirect } from "next/navigation"

import Indicator from "../../components/indicator"

const ValidIndicators = [
    ["Gdp per capita",2023,"biggest","€",0],
    ["Gdp per capita PPP",2023,"biggest","€",0],
    ["Net average monthly wage",2023,"biggest","€",0],
    ["Unemployment",2023,"smallest","%",2],
    ["House price to wage",2023,"smallest","",1],
    ["Gdp growth past 5 years",2023,"biggest","%",2],
    ["Debt to gdp",2023,"smallest","%",0],
    ["Corporate tax",2023,"smallest","%",1],
    ["Capital gains tax",2023,"smallest","%",1],
    ["Value added tax",2023,"smallest","%",1],
    ["R&D (Innovation) to gdp",2021,"biggest","%",2]
]

function IsValidIndicator(indicator){
  let valid = false
  
  ValidIndicators.forEach(validIndicator => {
    if(validIndicator[0].toLowerCase().replace(/ /g, "-") == indicator.toLowerCase().replace(/ /g, "-")){
      valid = true
    }
  });
  
  return valid
}

function FindIndicatorIndex(indicator){
  let IndicatorIndex = -1 

  ValidIndicators.forEach((element, index) => {
    if(element[0].toLowerCase().replace(/ /g, "-") == indicator.toLowerCase().replace(/ /g, "-")){
      IndicatorIndex = index
    }
  });

  return IndicatorIndex
}

export default async function IndicatorPage({params}){
  let {indicator} = await params
  if(indicator == "rd-innovation-to-gdp"){
    indicator = "R&D (Innovation) to gdp"
  }

  const IndicatorIndex = FindIndicatorIndex(indicator) 
    
  return(
    <>
      {IsValidIndicator(indicator) ? 
      <Indicator 
      Indicator={ValidIndicators[IndicatorIndex][0]}
      Year={ValidIndicators[IndicatorIndex][1]}
      Order={ValidIndicators[IndicatorIndex][2]}
      Units={ValidIndicators[IndicatorIndex][3]}
      DecimalPlaces={ValidIndicators[IndicatorIndex][4]}
      /> 
      : redirect("/economy") }
    </>
  )
}