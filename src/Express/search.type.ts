import {z} from "zod"

const searchSchema = z.object({ 
    departure_airport: z.string().min(3).max(3), 
    arrival_airport: z.string().min(3).max(3), 
})

export type searchType = z.infer<typeof searchSchema>
export default searchSchema