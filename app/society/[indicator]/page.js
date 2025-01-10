import { redirect } from "next/navigation"

import Indicator from "../../components/indicator"

const ValidIndicators = [
    ["Trust in other people",2023,"biggest","%",0],
    ["Voting participation",2023,"biggest","%",1],
    ["Lack of corruption score",2023,"biggest","",0],
    ["Religiosity",2010,"biggest","%",0],
    ["Risk of poverty",2023,"smallest","%",1],
    ["Tertiary education",2023,"biggest","%",1],
    ["Pisa score",2022,"biggest","",0],
    ["Obesity rate",2022,"smallest","%",1],
    ["Fertility rate",2022,"biggest","",2],
    ["Life expectancy",2022,"biggest","",1]
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
    if(element[0].toLowerCase().replace(/ /g, "-") == indicator){
      IndicatorIndex = index
    }
  });

  return IndicatorIndex
}

export default async function IndicatorPage({params}){
  let {indicator} = await params

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
      PrevPage={"/society"}
      /> 
      : redirect("/society") }
    </>
  )
}