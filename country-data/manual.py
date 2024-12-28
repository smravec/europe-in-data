import requests
import json

countries_default = [
    [0,"Austria"],
    [0,"Belgium"],
    [0,"Bulgaria"],
    [0,"Switzerland"],
    [0,"Cyprus"],
    [0,"Czechia"],
    [0,"Germany"],
    [0,"Denmark"],
    [0,"Spain"],
    [0,"Estonia"],
    [0,"Finland"],
    [0,"France"],
    [0,"Greece"],
    [0,"Croatia"],
    [0,"Hungary"],
    [0,"Ireland"],
    [0,"Italy"],
    [0,"Iceland"],
    [0,"Lithuania"],
    [0,"Luxembourg"],
    [0,"Latvia"],
    [0,"Malta"],
    [0,"Netherlands"],
    [0,"Norway"],
    [0,"Poland"],
    [0,"Portugal"],
    [0,"Romania"],
    [0,"Slovakia"],
    [0,"Slovenia"],
    [0,"Sweden"]  
]

countries_corporate_tax_2023 = [
    [23,"Austria"],
    [25,"Belgium"],
    [10,"Bulgaria"],
    [14.6,"Switzerland"],
    [12.5,"Cyprus"],
    [21,"Czechia"],
    [30,"Germany"],
    [22,"Denmark"],
    [25,"Spain"],
    [20,"Estonia"],
    [20,"Finland"],
    [25,"France"],
    [22,"Greece"],
    [18,"Croatia"],
    [9,"Hungary"],
    [12.5,"Ireland"],
    [24,"Italy"],
    [21,"Iceland"],
    [15,"Lithuania"],
    [24.94,"Luxembourg"],
    [20,"Latvia"],
    [35,"Malta"],
    [25.8,"Netherlands"],
    [22,"Norway"],
    [19,"Poland"],
    [21,"Portugal"],
    [16,"Romania"],
    [21,"Slovakia"],
    [22,"Slovenia"],
    [20.6,"Sweden"]  
]

countries_capital_gains_tax_2023 = [
    [27.5,"Austria"],
    [0,"Belgium"],
    [10,"Bulgaria"],
    [0,"Switzerland"],
    [20,"Cyprus"],
    [0,"Czechia"],
    [26.4,"Germany"],
    [42,"Denmark"],
    [28,"Spain"],
    [20,"Estonia"],
    [34,"Finland"],
    [34,"France"],
    [15,"Greece"],
    [12,"Croatia"],
    [15,"Hungary"],
    [33,"Ireland"],
    [26,"Italy"],
    [22,"Iceland"],
    [20,"Lithuania"],
    [0,"Luxembourg"],
    [20,"Latvia"],
    [0,"Malta"],
    [33,"Netherlands"],
    [37.8,"Norway"],
    [19,"Poland"],
    [28,"Portugal"],
    [10,"Romania"],
    [0,"Slovakia"],
    [0,"Slovenia"],
    [30,"Sweden"]  
]


#Write data
from update_country_data import write_data

data_to_write = countries_capital_gains_tax_2023
indicator = "Capital gains tax"
year = "2023"

for country in data_to_write:
    write_data(year, indicator, {country[1]: country[0]})


