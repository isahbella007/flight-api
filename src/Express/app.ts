import express from "express"
import ErrorBuilder from "./Util/errorBuilder"
import errorMiddleware from "./Middlewear/errorMiddlewear"
import router from "./routes"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', router)

// handle invalid route
app.use((req, res) => { 
    const error = new ErrorBuilder(404, "Route not found").build()
    res.sendStatus(error.statusCode).json(error)
})

app.use(errorMiddleware)

export default app 