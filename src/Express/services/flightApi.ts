import { searchType } from "../search.type";
import env from "dotenv";
import axios from "axios"

env.config({ path: "../.env" });
class FlightApi {
  async getFlightDetails(dep_iata:string, arr_iata:string) {
    
    const url = `${process.env.BASE_URL}?access_key=${process.env.API_KEY}&dep_iata=${dep_iata}&arr_iata=${arr_iata}`
    
    
    const response = await axios.get(url)
    const result = response.data.data
    return result
  }
}
export default FlightApi;
