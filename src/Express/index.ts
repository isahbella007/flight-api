import app from "./app"
import env from "dotenv"

env.config({path: ".env"})
const port = process.env.PORT
const server = app.listen(port, () => {console.log("Server is running..")})

function exitHandler(){ 
    if(server){ 
        server.close(() => { 
            console.log("Server shutting tetsing muh")
            process.exit(0)
        })
    }else{ 
        process.exit(0)
    }
}

process.on("SIGTERM", exitHandler)
process.on("SIGINT", exitHandler)
process.on("uncaughtException", exitHandler)
process.on("uncaughtException", exitHandler)