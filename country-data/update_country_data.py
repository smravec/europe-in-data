import json

#Format for data {"Country name": value}
#Pass either one or more keys

def write_data(year:str, indicator:str, data:dict, methodology:str=None, source:str=None, units:str=None, category:str=None):
    
    #Save to country-data.json
    #Load all current data and convert to dict
    with open("country-data.json", "r") as file:
        Country_data = json.load(file)

    for key in Country_data:
        #Check if there is indicator for this country in the data
        if key in data:
            #Check if given year already exists if not create it
            if year in Country_data[key]:
                Country_data[key][year][indicator] = data[key]
            else:
                Country_data[key][year] = { indicator: data[key] }

    #Save data  back to json file
    with open("country-data.json", "w") as file:
        json.dump(Country_data,file, indent=4)

    if methodology != None: 
        #Save to methodology.json
        with open("methodology.json", "r") as file:
            Methodology_data = json.load(file)
        
        Methodology_data[indicator] = { "methodology": methodology, "source": source,"units": units , "last-year": year, "category": category }

        #Save data  back to json file
        with open("methodology.json", "w") as file:
            json.dump(Methodology_data,file, indent=4)
    

#write_data("2023","gdp",{'Austria': 56856.125, 'Belgium': 53854.213, 'Bulgaria': 15764.648, 'Switzerland': 101510.023, 'Cyprus': 35015.587, 'Czechia': 31630.255, 'Germany': 53565.041, 'Denmark': 68618.872, 'Spain': 33895.593, 'Estonia': 30137.644, 'Finland': 53130.693, 'France': 46305.162, 'Greece': 22880.296, 'Croatia': 21520.681, 'Hungary': 22131.628, 'Ireland': 103465.935, 'Italy': 39012.076, 'Iceland': 83485.11, 'Lithuania': 26997.801, 'Luxembourg': 129810.315, 'Latvia': 23175.505, 'Malta': 41204.739, 'Netherlands': 64829.341, 'Norway': 87702.851, 'Poland': 22085.808, 'Portugal': 27834.773, 'Romania': 18424.685, 'Slovakia': 24468.025, 'Slovenia': 32673.257, 'Sweden': 55433.135})