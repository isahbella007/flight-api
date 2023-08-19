import env from "dotenv"

env.config({path: ".env"})
const axiosConfig = { 
    base_url: process.env.BASE_URL! 
}
export default axiosConfig