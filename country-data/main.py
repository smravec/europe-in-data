import requests
import json

#World bank api
Worldbank_url = ""

#Imf api
Imf_url = "https://www.imf.org/external/datamapper/api/v1/"

# "...?periods=2023,2022"
Imf_years = "?periods=2023"

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
    ["LIE","Liechtenstein"],
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
    ["NGDPD","Gdp"],   
    ["NGDPDPC","Gdp per capita"],
    ["PPPPC","Gdp per capita PPP"],
    ["NGDP_RPCH", "Gdp growth"],
    ["LUR", "Unemployment"],
    ["GG_DEBT_GDP", "Government debt"],
    ["DI","Digital Infrastructure"]
]

#Eurostat api
Eurostat_url = ""


#Final url

#Load all current data and convert to dict
with open("country-data.json", "r") as file:
   Country_data = json.load(file)


#Save data  back to json file
with open("country-data.json", "w") as file:
   json.dumps(Country_data,file)

