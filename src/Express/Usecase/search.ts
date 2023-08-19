import ApiError from "../Util/apiError";
import searchSchema, { searchType } from "../search.type";
import FlightApi from "../services/flightApi";

class searchUseCase {
    service: FlightApi
    constructor(service: FlightApi){
        this.service = service
    } 

    async validateSeachParams(dep_iata:string, arr_iata:string){
        const onlyLettersPattern = /^[A-Za-z]+$/;

        if(!dep_iata || !arr_iata){
            throw new ApiError("Missing required paramters", 400)
        }

        if(dep_iata.length != 3 || arr_iata.length != 3){ 
            throw new ApiError("Lenght must be equal to 3", 400)
        }

        if(!onlyLettersPattern.test(dep_iata) || !onlyLettersPattern.test(arr_iata)){ 
            throw new ApiError("Only strings are allowed", 400)
        }
        
        return this.service.getFlightDetails(dep_iata, arr_iata)
    }
}

export default searchUseCase