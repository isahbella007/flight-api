import { Request, Response } from "express"
import asyncHandler from "../Util/handleAsync"
import searchUseCase from "../Usecase/search"
import FlightApi from "../services/flightApi"

const searchFlight = asyncHandler(async(req: Request, res: Response) => {
    const {departureIATA, arrivalIata} = req.query 


    const flightApiService = new FlightApi()
    const searchBusinessLogic = new searchUseCase(flightApiService)

    const result = await searchBusinessLogic.validateSeachParams(departureIATA as string, arrivalIata as string)
    res.send(result)
})

export default searchFlight