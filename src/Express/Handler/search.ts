import { Request, Response } from "express"
import asyncHandler from "../Util/handleAsync"
import searchUseCase from "../Usecase/search"
import FlightApi from "../services/flightApi"

const searchFlight = asyncHandler(async(req: Request, res: Response) => {
    const {dep_iata, arr_iata} = req.query 


    const flightApiService = new FlightApi()
    const searchBusinessLogic = new searchUseCase(flightApiService)

    const result = await searchBusinessLogic.validateSeachParams(dep_iata as string, arr_iata as string)
    console.log(result)
    res.send(result)
})

export default searchFlight