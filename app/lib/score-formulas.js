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

export function EconomyScoreFormula(country){
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
        (40 * 
        [( FindBestValue("Capital gains tax", "2023", "biggest") 
        - CountryData[country]["2023"]["Capital gains tax"]) / 
        ( FindBestValue("Capital gains tax", "2023", "biggest")  - FindBestValue("Capital gains tax", "2023", "smallest") )])
        + 
        (20 * 
        [( FindBestValue("Value added tax", "2023", "biggest") 
        - CountryData[country]["2023"]["Value added tax"]) / 
        ( FindBestValue("Value added tax", "2023", "biggest")  - FindBestValue("Value added tax", "2023", "smallest") )])
        + 
        (40 * 
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

    // 20 gpd per capita ppp 
    // 10 unemployment 
    // 7.5 debt to gdp 
    // 17.5 R&D (Innovation) to gdp
    // 5 taxes 40 capital gains + 20 value added tax + 40 corporate tax

    // 30 net average wage
    // 5 house price to wage 
    // 5 gdp growth past 5 years

    const overall_score =  (
        gdp_per_capita_ppp_score * 0.2
        + unemployment_score * 0.1
        + debt_to_gdp_score * 0.075
        + innovation_score * 0.175
        + taxes_score * 0.05
        + net_average_wage_score * 0.3
        + house_price_to_wage_score * 0.05
        + gdp_growth_past_5_years_score * 0.05 )
    
    return Math.trunc(overall_score)
}

export function SocietyScoreFormula(country){

    const fertility_rate_score = (
        100 * (
        CountryData[country]["2022"]["Fertility rate"] /
        FindBestValue("Fertility rate", "2022", "biggest"))
    )

    const obesity_rate_score = (
        100 * (
        CountryData[country]["2022"]["Obesity rate"] /
        FindBestValue("Obesity rate", "2022", "biggest"))
    )

    const life_expectancy_score = (
        100 * (
        CountryData[country]["2022"]["Life expectancy"] /
        FindBestValue("Life expectancy", "2022", "biggest"))
    )

    const lack_of_corruption_score = (
        100 * (
        CountryData[country]["2023"]["Lack of corruption score"] /
        FindBestValue("Lack of corruption score", "2023", "biggest"))
    )

    const trust_in_other_people_score = (
        100 * (
        CountryData[country]["2023"]["Trust in other people"] /
        FindBestValue("Trust in other people", "2023", "biggest"))
    )

    const pisa_score = (
        100 * (
        CountryData[country]["2022"]["Pisa score"] /
        FindBestValue("Pisa score", "2022", "biggest"))
    )

    const risk_of_poverty_score = (
        100 * 
        [( FindBestValue("Risk of poverty", "2023", "biggest") 
        - CountryData[country]["2023"]["Risk of poverty"]) / 
        ( FindBestValue("Risk of poverty", "2023", "biggest")  - FindBestValue("Risk of poverty", "2023", "smallest") )]
    )
    
    
    // 5 Fertility rate
    // 10 Obesity rate 
    // 25 Life expectancy

    // 20 Lack of corruption score
    // 10 Trust in other people
    // 20 Pisa score
    // 10 Risk of poverty

    const overall_score =  (
        fertility_rate_score * 0.05 
        + obesity_rate_score * 0.1 
        + life_expectancy_score * 0.25
        + lack_of_corruption_score * 0.2
        + trust_in_other_people_score * 0.1
        + pisa_score * 0.2
        + risk_of_poverty_score * 0.1)
    
    return Math.trunc(overall_score)
}