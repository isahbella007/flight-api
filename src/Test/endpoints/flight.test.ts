import request from "supertest"
import app from "../../Express/app"

describe('Flight Endpoint', ()=> { 
    it('should return error for missing  paramters', async() => { 
        const response = await request(app).get("/api/flight-search").query({ 
            dep_iata: "", 
            arr_iata: ""
        })
        expect(response.body.error.message).toBe("Missing required paramters")
        expect(response.statusCode).toBe(400)

    })

    it('should return error for incorrect length', async() => { 
        const response = await request(app).get("/api/flight-search").query({ 
            dep_iata: "E", 
            arr_iata: "FDS"
        })
        expect(response.body.error.message).toBe("Lenght must be equal to 3")
        expect(response.statusCode).toBe(400)
    })

    it('should return error for invalid entry', async() => { 
        const response = await request(app).get("/api/flight-search").query({ 
            dep_iata: "123", 
            arr_iata: "Fdf"
        })
        expect(response.body.error.message).toBe("Only strings are allowed")
        expect(response.statusCode).toBe(400)
    })
})