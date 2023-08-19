import env from "dotenv";
import axiosInstance from "./axios";

env.config({ path: "../.env" });
class FlightApi {
  async getFlightDetails(departureIATA:string, arrivalIata:string) {
    try{ 
      const params = {
        access_key: process.env.API_KEY!,
        dep_iata: departureIATA,
        arr_iata: arrivalIata,
      };
      
      const response = await axiosInstance.get("", {params})
      const result = response.data.data
      return result
    }catch(error){ 
      console.log(error)
    }
    
  }
}
export default FlightApi;
