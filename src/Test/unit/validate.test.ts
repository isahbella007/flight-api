import searchUseCase from "../../Express/Usecase/search"
import ApiError from "../../Express/Util/apiError"
import FlightApi from "../../Express/services/flightApi"

describe('Search Value Validate FN', () => { 
    let mockService: FlightApi
    let searchUC: searchUseCase

    beforeAll(()=> { 
        searchUC = new searchUseCase(mockService)

    })

    it('should throw an API error if no strings are passed', async() => { 
        await expect(searchUC.validateSeachParams("", "")).rejects.toThrow(ApiError)
    })

    it('should throw API error if the lenght of the string passed is less than or greater than three', async() => { 
        await expect(searchUC.validateSeachParams("df", "dff")).rejects.toThrow(ApiError)
    })

    it('should throw API error if the string passed contains numbers / symbols', async() => { 
        await expect(searchUC.validateSeachParams("123", "ECN")).rejects.toThrow(ApiError)
    })
})