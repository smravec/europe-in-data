import CountryData from "../../country-data/country-data.json"

function FindBestValue(indicator,year,biggest_smallest){
    const countries = Object.keys(CountryData)

    let BestValue = CountryData[countries[0]][year][indicator]
    countries.forEach(country => {
        if(biggest_smallest == "smallest"){
            if(BestValue > CountryData[country][year][indicator]){
                BestValue = CountryData[country][year][indicator]
            }
        }   
        else if(biggest_smallest == "biggest"){
            if(BestValue < CountryData[country][year][indicator]){
                BestValue = CountryData[country][year][indicator]
            }
        }     
    });

    return BestValue
}

export default function EconomyScoreFormula(country){
    const gdp_per_capita_ppp_score = (
        100 * (
        CountryData[country]["2023"]["Gdp per capita PPP"] /
        FindBestValue("Gdp per capita PPP", "2023", "biggest"))
    )

    const unemployment_score = (
        100 * 
        [( FindBestValue("Unemployment", "2023", "biggest") 
        - CountryData[country]["2023"]["Unemployment"]) / 
        ( FindBestValue("Unemployment", "2023", "biggest")  - FindBestValue("Unemployment", "2023", "smallest") )]
    )

    const debt_to_gdp_score = (
        100 * 
        [( FindBestValue("Debt to gdp", "2023", "biggest") 
        - CountryData[country]["2023"]["Debt to gdp"]) / 
        ( FindBestValue("Debt to gdp", "2023", "biggest")  - FindBestValue("Debt to gdp", "2023", "smallest") )]
    )

    const innovation_score = (
        100 *
        (CountryData[country]["2021"]["R&D (Innovation) to gdp"] /
        FindBestValue("R&D (Innovation) to gdp", "2021", "biggest"))
    )

    const taxes_score = (
        (33.3 * 
        [( FindBestValue("Capital gains tax", "2023", "biggest") 
        - CountryData[country]["2023"]["Capital gains tax"]) / 
        ( FindBestValue("Capital gains tax", "2023", "biggest")  - FindBestValue("Capital gains tax", "2023", "smallest") )])
        + 
        (33.3 * 
        [( FindBestValue("Value added tax", "2023", "biggest") 
        - CountryData[country]["2023"]["Value added tax"]) / 
        ( FindBestValue("Value added tax", "2023", "biggest")  - FindBestValue("Value added tax", "2023", "smallest") )])
        + 
        (33.3 * 
        [( FindBestValue("Corporate tax", "2023", "biggest") 
        - CountryData[country]["2023"]["Corporate tax"]) / 
        ( FindBestValue("Corporate tax", "2023", "biggest")  - FindBestValue("Corporate tax", "2023", "smallest") )])
    )

    const net_average_wage_score = (
        100 *
        (CountryData[country]["2023"]["Net average wage"] /
        FindBestValue("Net average wage", "2023", "biggest"))
    )

    const house_price_to_wage_score = (
        100 * 
        [( FindBestValue("House price to wage", "2023", "biggest") 
        - CountryData[country]["2023"]["House price to wage"]) / 
        ( FindBestValue("House price to wage", "2023", "biggest")  - FindBestValue("House price to wage", "2023", "smallest") )]
    )

    const gdp_growth_past_5_years_score = (
        100 *
        (CountryData[country]["2023"]["Gdp growth past 5 years"] /
        FindBestValue("Gdp growth past 5 years", "2023", "biggest"))
    )

    // 5 gpd per capita ppp 
    // 20 unemployment 
    // 10 debt to gdp 
    // 20 R&D (Innovation) to gdp
    // 5 taxes capital gains + value added tax + corporate tax

    // 30 net average wage
    // 5 house price to wage 
    // 5 gdp growth past 5 years

    const overall_score =  (
        gdp_per_capita_ppp_score * 0.05
        + unemployment_score * 0.2
        + debt_to_gdp_score * 0.1
        + innovation_score * 0.2
        + taxes_score * 0.05
        + net_average_wage_score * 0.3
        + house_price_to_wage_score * 0.05
        + gdp_growth_past_5_years_score * 0.05 )
    
 //   console.log(overall_score)
    console.log(debt_to_gdp_score)

    return Math.trunc(overall_score)
}