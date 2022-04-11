import axios from "axios"
const url = `https://restcountries.com/v3.1/alpha`
export interface CurrentCountry {
    flags: { png: string }
}
export async function getCountryService(countryName: string): Promise<CurrentCountry> {
    const { data } = await axios.get(`${url}/${countryName}`)
    return data[0]
}

// function Country(name: string, population: number) {
//     this.name = name;
//     this.population = population
// }