import eurostat
import requests
from update_country_data import write_data

#True == Search mode, False == Download mode 
search = False

#Search eurostat datasets
if search:

    #Set the keyword
    keyword = "Fertility"

    toc_df = eurostat.get_toc_df()
    f = eurostat.subset_toc_df(toc_df, keyword)
    print(f)

##########################

#Society datasets - code

#Life expectancy by age, sex and NUTS 2 region - demo_r_mlifexp
#Fertility indicator - demo-find
#Population by educational attainment level, sex and NUTS 2 region - edat_lfse_04
#Persons at risk of poverty or social exclusion by NUTS region - ilc_li41

#Economy datasets - code

#GERD by sector of performance and NUTS 2 region (R&D) - rd_e_gerdreg
#Annual net earnings - earn_nt_net

#Extracted indicators - methodology

#R&D(Inovation) spending - spending in higher education + spending in entreprise business (% of gdp) year 2021 
#Net average wage - net average wage 100% single working person in eur year 2023
#Tertiary education - % of people achieving tertiary education
#Fertility rate - fertility rate per woman
#Life expectancy - life expetancy at birth
#Risk of poverty - percentage of people at the risk of poverty

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
code = "rd_e_gerdreg"

#Set indicator
indicator = "R&D (Innovation) to"

#Set year
year = 2021

#Set methodology
methodology = "How much money is the country speding on research and development in millions"

#Set units
units = "€"

#Set category
category = "economy"

#Set source
source = "eurostat"

if not search:
    filter_pars = {'startPeriod': year, 'endPeriod': year, 'geo': country_codes_1}

    dataset = eurostat.get_data(code, filter_pars=filter_pars )

    data_to_save = {}

    # #Risk of poverty
    # for x in dataset:

    #     country_name = ""
    #     for code in country_codes:
    #         if code[0] == x[2]:
    #             country_name = code[1]

    #     if x[1] == "PC":
    #         data_to_save.update({country_name:x[3]})

    # write_data(str(year),indicator,data_to_save,methodology,source,units,category)

    ##Life expectancy
    # for x in dataset:

    #     country_name = ""
    #     for code in country_codes:
    #         if code[0] == x[4]:
    #             country_name = code[1]

    #     if x[2] == "T" and x[1] == "YR" and x[3] == "Y_LT1":
    #         data_to_save.update({country_name:x[5]}) 

    # write_data(str(year),indicator,data_to_save,methodology,source,units,category)

    # #Fertility rate
    # for x in dataset:

    #     country_name = ""
    #     for code in country_codes:
    #         if code[0] == x[2]:
    #             country_name = code[1]

    #     if x[1] == "TOTFERRT":
    #         data_to_save.update({country_name:x[3]}) 

    # write_data(str(year),indicator,data_to_save,methodology,source,units,category)


    # #Tertiary education
    # for x in dataset:

    #     country_name = ""
    #     for code in country_codes:
    #         if code[0] == x[5]:
    #             country_name = code[1]

    #     if x[1] == "T" and x[2] == "ED5-8" and x[3] == "Y30-34":
    #         data_to_save.update({country_name : x[6]})

    # write_data(str(year),"Tertiary education",data_to_save,methodology,source,units,category)

    # #Net average wage
    # for x in dataset:

    #     country_name = ""
    #     for code in country_codes:
    #         if code[0] == x[4]:
    #             country_name = code[1]

    #     if x[1] == "EUR" and x[2] == "NET" and x[3] == "P1_NCH_AW100":
    #         data_to_save.update({country_name : x[5]})

    # write_data(str(year),"Net average wage",data_to_save,methodology,source,units,category)

    # #R&D(Inovation) spending
    bes_pt = 0
    hes_pt = 0
    for x in dataset:

        if x[1] == "BES" and x[2] == "EUR_HAB":
            bes_pt = x[4]
        if x[1] == "HES" and x[2] == "EUR_HAB":
            hes_pt = x[4]    

        # if x[1] == "BES" and x[2] == "PC_GDP":
        #     bes_pt = x[4]
        # if x[1] == "HES" and x[2] == "PC_GDP":
        #     hes_pt = x[4]   
        
        country_name = ""

        for code in country_codes:
            if code[0] == x[3]:
                country_name = code[1]

        if x[1] == "TOTAL" and x[2] == "PC_GDP":
            data_to_save.update({country_name : (bes_pt+hes_pt)})
            print(f"{country_name}: {bes_pt+hes_pt} %")
    

    write_data(str(year),"R&D (Innovation) in eur", data_to_save,methodology,source,units,category )