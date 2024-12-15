import json
import requests
from update_country_data import write_data

Imf_url = "https://www.imf.org/external/datamapper/api/v1/"


#years to scrape (fix self construct later)
years = [
    "2023"
]

# "...?periods=2023,2022"
Imf_years = f"?periods={years[0]}"


# ".../AUT/BEL/"
Imf_countries = [ 
    ["AUT","Austria"],
    ["BEL","Belgium"],
    ["BGR","Bulgaria"],
    ["CHE","Switzerland"],
    ["CYP","Cyprus"],
    ["CZE","Czechia"],
    ["DEU","Germany"],
    ["DNK","Denmark"],
    ["ESP","Spain"],
    ["EST","Estonia"],
    ["FIN","Finland"],
    ["FRA","France"],
    ["GRC","Greece"],
    ["HRV","Croatia"],
    ["HUN","Hungary"],
    ["IRL","Ireland"],
    ["ITA","Italy"],
    ["ISL","Iceland"],
    ["LTU","Lithuania"],
    ["LUX","Luxembourg"],
    ["LVA","Latvia"],
    ["MLT","Malta"],
    ["NLD","Netherlands"],
    ["NOR","Norway"],
    ["POL","Poland"],
    ["PRT","Portugal"],
    ["ROU","Romania"],
    ["SVK","Slovakia"],
    ["SVN","Slovenia"],
    ["SWE","Sweden"]   
] 

# ".../NGDPD/"
Imf_indicators = [
    ["NGDPDPC","Gdp per capita"],
    ["PPPPC","Gdp per capita PPP"],
    ["NGDP_RPCH", "Gdp growth"],
    ["LUR", "Unemployment"],
    ["GG_DEBT_GDP", "Government debt"]
]

#Other indicators
Imf_indicators_not_scraped = [
    ["DI","Digital Infrastructure"],
    ["NGDPD","Gdp"],   
]

#Scrape
#for indicator Imf_indicators
for country in Imf_countries:
    final_url = f"{Imf_url}{Imf_indicators[0][0]}/{country[0]}/{Imf_years}"
    response = requests.get(final_url)
    data = response.json()

    print(data)
    print(data["values"][Imf_indicators[0][0]][country[0]][years[0]])