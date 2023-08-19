import express from "express"
import searchFlight from "../Handler/search"

const router = express.Router()

router.get('/welcome', (req, res) => { res.json({message: "Welcome to the API"})})
router.get('/flight-search', searchFlight)

export default router