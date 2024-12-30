import eurostat
import requests
from update_country_data import write_data

#True == Search mode, False == Download mode 
search = True

#Search eurostat datasets
if search:

    #Set the keyword
    keyword = "Housing"

    toc_df = eurostat.get_toc_df()
    f = eurostat.subset_toc_df(toc_df, keyword)
    print(f)

##########################

#Society datasets - code

#Life expectancy by age, sex and NUTS 2 region
#Fertility indicator - DEMO_FIND 
#Population by educational attainment level, sex and NUTS 2 region
#Persons at risk of poverty or social exclusion by NUTS region

#Economy datasets - code

#GERD by sector of performance and NUTS 2 region (R&D) - rd_e_gerdreg
#Annual net earnings - earn_nt_net

#Extracted indicators - methodology

#R&D(Inovation) spending - spending in higher education + spending in entreprise business (% of gdp) year 2021 
#Net average wage - net average wage 100% single working person in eur year 2023

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

#Download dataset

#Set dataset code
code = "earn_nt_net"

#Set year
year = 2023

if not search:
    filter_pars = {'startPeriod': year, 'endPeriod': year, 'geo': country_codes_1}

    dataset = eurostat.get_data(code, filter_pars=filter_pars )

    data_to_save = {}

    #print(dataset)

    # #Net average wage
    # for x in dataset:

    #     country_name = ""
    #     for code in country_codes:
    #         if code[0] == x[4]:
    #             country_name = code[1]

    #     if x[1] == "EUR" and x[2] == "NET" and x[3] == "P1_NCH_AW100":
    #         data_to_save.update({country_name : x[5]})

    # write_data(str(year),"Net average wage",data_to_save)

    # #R&D(Inovation) spending
    # bes_pt = 0
    # hes_pt = 0
    # for x in dataset:

    #     if x[1] == "BES" and x[2] == "EUR_HAB":
    #         bes_pt = x[4]
    #     if x[1] == "HES" and x[2] == "EUR_HAB":
    #         hes_pt = x[4]    

    #     # if x[1] == "BES" and x[2] == "PC_GDP":
    #     #     bes_pt = x[4]
    #     # if x[1] == "HES" and x[2] == "PC_GDP":
    #     #     hes_pt = x[4]   
        
    #     country_name = ""

    #     for code in country_codes:
    #         if code[0] == x[3]:
    #             country_name = code[1]

    #     if x[1] == "TOTAL" and x[2] == "PC_GDP":
    #         data_to_save.update({country_name : (bes_pt+hes_pt)})
    #         print(f"{country_name}: {bes_pt+hes_pt} %")
    

    # write_data(str(year),"R&D (Innovation) spending in eur", data_to_save )