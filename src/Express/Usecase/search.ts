import ApiError from "../Util/apiError";
import FlightApi from "../services/flightApi";

class searchUseCase {
    service: FlightApi
    constructor(service: FlightApi){
        this.service = service
    } 

    async validateSeachParams(departureIATA:string, arrivalIata:string){
        const onlyLettersPattern = /^[A-Za-z]+$/;
        const datePattern = /^\d{4}-\d{2}-\d{2}$/

        if(!departureIATA || !arrivalIata){
            throw new ApiError("Missing required paramters", 400)
        }

        if(departureIATA.length != 3 || arrivalIata.length != 3){ 
            throw new ApiError("Lenght must be equal to 3", 400)
        }

        if(!onlyLettersPattern.test(departureIATA) || !onlyLettersPattern.test(arrivalIata)){ 
            throw new ApiError("Only strings are allowed", 400)
        }
        
        return this.service.getFlightDetails(departureIATA, arrivalIata)
    }
}

export default searchUseCase