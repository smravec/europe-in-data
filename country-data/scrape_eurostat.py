import eurostat

#print(eurostat.get_toc(agency='all', dataset='all', lang='en')[-1])

# toc_df = eurostat.get_toc_df()
# f = eurostat.subset_toc_df(toc_df, 'fertility')
# print(f)


country_codes = [
    "AT",
    "BE",
    "BG",
    "CZ",
    "DK",
    "DE",
    "EE",
    "IE",
    "EL",
    "ES",
    "FR",
    "HR",
    "IT",
    "CY",
    "LV",
    "LT",
    "LU",
    "HU",
    "MT",
    "NL",
    "PL",
    "PT",
    "RO",
    "SI",
    "SK",
    "FI",
    "SE",
    "IS",
    "NO",
    "CH"
]

#Datasets
# Life expectancy by age, sex and NUTS 2 region
# Fertility indicator DEMO_FIND 2022
# Population by educational attainment level, sex and NUTS 2 region
# Persons at risk of poverty or social exclusion by NUTS region

#test = eurostat.get_data("DEMO_FIND")
code = "DEMO_FIND"
#test = eurostat.get_pars(code)
filter_pars = {'startPeriod': 2022, 'endPeriod': 2022, 'geo': country_codes} 
test = eurostat.get_data(code, filter_pars=filter_pars )

fertility_rates = [[row[2], row[3]] for row in test if row[1] == 'TOTFERRT']
print(fertility_rates)

