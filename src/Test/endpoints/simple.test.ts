import app from "../../Express/app"
import request from "supertest"

describe('Welcome Endpoint', () => { 
    it('should return welcome to the api', async()=>{
        const response = await request(app).get("/api/welcome")
        expect(response.statusCode).toBe(200)
        expect(response.body.message).toBe("Welcome to the API")
    })
})