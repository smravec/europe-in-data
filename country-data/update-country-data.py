import json

year=2023
indicator = "gdp"


#Load all current data and convert to dict
with open("country-data.json", "r") as file:
   Country_data = json.load(file)


for key in Country_data:
    print(f"Key: {key}, Value: {Country_data[key]["Icon"]}")
    #First check if given year already exists if not create it
    if year in Country_data[key]:
        Country_data[key][year][indicator] = 200
    else:
        Country_data[key][year] = { indicator: 100 }

#Save data  back to json file
with open("country-data.json", "w") as file:
   json.dump(Country_data,file, indent=4)