import { Beer } from "../types/BeerType";
import axios from "axios";

export async function get_list_of_beer(number: number = 12) {
  const apiUrl = "https://api.openbrewerydb.org/breweries?per_page=";

  try {
    let res = await axios.get<Beer[]>(apiUrl + number);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function get_a_random_beer() {
  const apiUrl = "https://api.openbrewerydb.org/breweries/random";

  try {
    let res = await axios.get<Beer>(apiUrl);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}
