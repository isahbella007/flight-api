import request from "supertest"
import app from "../../Express/app"

describe('Flight Endpoint', ()=> { 
    it('should return error for missing  paramters', async() => { 
        const response = await request(app).get("/api/flight-search").query({ 
            departureIATA: "", 
            arrivalIata: ""
        })
        expect(response.body.error.message).toBe("Missing required paramters")
        expect(response.statusCode).toBe(400)

    })

    it('should return error for incorrect length', async() => { 
        const response = await request(app).get("/api/flight-search").query({ 
            departureIATA: "E", 
            arrivalIata: "FDS"
        })
        expect(response.body.error.message).toBe("Lenght must be equal to 3")
        expect(response.statusCode).toBe(400)
    })

    it('should return error for invalid entry', async() => { 
        const response = await request(app).get("/api/flight-search").query({ 
            departureIATA: "123", 
            arrivalIata: "Fdf"
        })
        expect(response.body.error.message).toBe("Only strings are allowed")
        expect(response.statusCode).toBe(400)
    })
})