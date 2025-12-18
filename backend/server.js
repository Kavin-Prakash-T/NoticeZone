const express = require("express")
const cors = require("cors")

//module imports
const authRouter=require("./routes/auth")
const connectDB=require("./config/db")

const app=express()
connectDB()

//middlewares
app.use(express.json())
app.use(cors())

//route middlewares
app.use("/auth",authRouter)



app.listen(3000,console.log(`Server is running at http://localhost:3000`));