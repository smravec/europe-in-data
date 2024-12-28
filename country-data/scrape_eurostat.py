import eurostat
import requests
from update_country_data import write_data

#print(eurostat.get_toc(agency='all', dataset='all', lang='en')[-1])

# toc_df = eurostat.get_toc_df()
# f = eurostat.subset_toc_df(toc_df, '')
# print(f)

country_codes = [
    ["AT","Austria"],
    ["BE","Belgium"],
    ["BG","Bulgaria"],
    ["CZ","Czechia"],
    ["DK","Denmark"],
    ["DE","Germany"],
    ["EE","Estonia"],
    ["IE","Ireland"],
    ["EL","Greece"],
    ["ES","Spain"],
    ["FR","France"],
    ["HR","Croatia"],
    ["IT","Italy"],
    ["CY","Cyprus"],
    ["LV","Latvia"],
    ["LT","Lithuania"],
    ["LU","Luxembourg"],
    ["HU","Hungary"],
    ["MT","Malta"],
    ["NL","Netherlands"],
    ["PL","Poland"],
    ["PT","Portugal"],
    ["RO","Romania"],
    ["SI","Slovenia"],
    ["SK","Slovakia"],
    ["FI","Finland"],
    ["SE","Sweden"],
    ["IS","Iceland"],
    ["NO","Norway"],
    ["CH","Switzerland"]
]

country_codes_1 = [item[0] for item in country_codes]

#Datasets
# Life expectancy by age, sex and NUTS 2 region
# Fertility indicator DEMO_FIND 2022
# Population by educational attainment level, sex and NUTS 2 region
# Persons at risk of poverty or social exclusion by NUTS region

#test = eurostat.get_data("DEMO_FIND")
# code = "DEMO_FIND"
# #test = eurostat.get_pars(code)
# filter_pars = {'startPeriod': 2022, 'endPeriod': 2022, 'geo': country_codes} 
# test = eurostat.get_data(code, filter_pars=filter_pars )

# fertility_rates = [[row[2], row[3]] for row in test if row[1] == 'TOTFERRT']
# print(fertility_rates)

#Economy datasets
# GERD by sector of performance and NUTS 2 region (R&D) - rd_e_gerdreg
#Higher education sector + business entreprise sector

code = "rd_e_gerdreg"
filter_pars = {'startPeriod': 2021, 'endPeriod': 2021, 'geo': country_codes_1}

test = eurostat.get_data(code, filter_pars=filter_pars )

data_to_save = {}

bes_pt = 0
hes_pt = 0
for x in test:

    # if x[1] == "BES" and x[2] == "EUR_HAB":
    #     print(f"{x[3]} has a spending per capita of {x[5]} in entreprise")

    # if x[1] == "HES" and x[2] == "EUR_HAB":
    #     print(f"{x[3]} has a spending per capita of {x[5]} in higher eduacation")
        
    if x[1] == "BES" and x[2] == "EUR_HAB":
        bes_pt = x[4]
    if x[1] == "HES" and x[2] == "EUR_HAB":
        hes_pt = x[4]    
    
    country_name = ""

    for code in country_codes:
        if code[0] == x[3]:
            country_name = code[1]

    if x[1] == "TOTAL" and x[2] == "PC_GDP":
        data_to_save.update({country_name : (bes_pt+hes_pt)})
        print(f"{country_name}: {bes_pt+hes_pt} %")
   

write_data("2021","R&D (Innovation) spending in eur", data_to_save )

# par_values = eurostat.get_par_values('rd_e_gerdreg',"BE")
# print(par_values)




