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
for indicator in Imf_indicators:
    data_to_save = {}
    for country in Imf_countries:
        final_url = f"{Imf_url}{indicator[0]}/{country[0]}/{Imf_years}"
        response = requests.get(final_url)
        data = response.json()

        print(data)
        print(data["values"][indicator[0]][country[0]][years[0]])

        data_to_save.update({country[1]: data["values"][indicator[0]][country[0]][years[0]]})
    print(data_to_save)
    write_data(years[0],indicator[1],data_to_save)

#Scrape gdp growth past 5 years
# Imf_years = f"?periods=2023,2022,2021,2020,2019"
# data_to_save = {}
# years = ["2023","2022","2021","2020","2019"]
# indicator = Imf_indicators[2]
# for country in Imf_countries:
#     sum_growth = 100

#     final_url = f"{Imf_url}{indicator[0]}/{country[0]}/{Imf_years}"
#     response = requests.get(final_url)
#     data = response.json()

#     #print(data)
#     #print(data["values"][indicator[0]][country[0]]["2023"])

#     for year in years:
#         sum_growth += (data["values"][indicator[0]][country[0]][year] / 100)*sum_growth
#     #average = average / len(years)
#     sum_growth -= 100    
#     print(sum_growth)

#     data_to_save.update({country[1]: sum_growth})
# print(data_to_save)
# write_data(years[0],"Gdp growth past 5 years",data_to_save)
