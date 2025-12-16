import express from 'express'
import  { config } from "dotenv"
import { connectDB, disconnectDB } from "./config/db.js"

import movieRoute from "./routes/movieRoutes.js"
import authRoute from "./routes/authRoutes.js"
import watchlistRoute from "./routes/watchlistRoutes.js"


config()
connectDB()


const app = express()

//Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended:true }))

//API ROUTES
// app.route("/movies", movieRoute)
// app.route("/auth", authRoute)
app.use("/movies", movieRoute)
app.use("/auth", authRoute)
app.use("/watchlist", watchlistRoute)

const PORT  = process.env.PORT || 3001
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})


// Handle unhandled promise rejections (e.g, database connection errors)
process.on("uncaughtRejection", (err) =>{
console.log(`uncaughtRejection error: ${err}`)
server.close(async() => {
    await disconnectDB();
    process.exit(1);
})
})


//Handle uncaught exceptions
process.on("uncaughtException", async (err) => {
    console.log(`uncaught Exception: ${err}`)
    await disconnectDB();
    process.exit(1)
})

process.on("SIGTERM",async () =>{
    console.log("SIGTERM received, shutting down gracefully")
    server.close(async() => {
        await disconnectDB();
        process.exit(0);
    })
} )