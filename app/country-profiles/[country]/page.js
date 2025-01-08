import CountryData from '../../../country-data/country-data.json'
import { redirect } from 'next/navigation'

function IsValidCountry(country){
  let valid = false
  const countries = Object.keys(CountryData)

  countries.forEach(validCountry => {
    if(validCountry.toLowerCase() == country){
      valid = true
    }
  });

  return valid
}

function FirstLetterToCapital(country){
  return ((country.charAt(0).toUpperCase()) + (country.substring(1)))
}

import CountryProfile from "../../components/country-profile"

export default async function Country( {params} ){
    const { country } = await params;
    console.log("this is a country ---")
    console.log(FirstLetterToCapital(country))
    return(<>
      {IsValidCountry(country) ? <CountryProfile Country={FirstLetterToCapital(country)}/> : redirect("/country-profiles") }
    </>
    )

  }