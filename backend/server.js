const express = require("express")
const cors = require("cors")

//module imports
const authRouter=require("./routes/auth")
const noticeRouter=require("./routes/notice")
const connectDB=require("./config/db")

const app=express()
connectDB()

//middlewares
app.use(express.json())
app.use(cors())

//route middlewares
app.use("/auth",authRouter)
app.use("/notices",noticeRouter)



app.listen(3000,console.log(`Server is running at http://localhost:3000`));