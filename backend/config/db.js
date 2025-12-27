const mongoose=require("mongoose")

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB connected successfully✅")
    }catch(err){
        console.log("MongoDB connection error❌",err.message)
    }
}

module.exports=connectDB