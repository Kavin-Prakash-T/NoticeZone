const mongoose=require("mongoose")

async function connectDB(){
    try{
        await mongoose.connect("mongodb+srv://tkavinprakash:test@cluster0.dflvfuf.mongodb.net/noticezone")
        console.log("MongoDB connected successfully✅")
    }catch(err){
        console.log("MongoDB connection error❌",err.message)
    }
}

module.exports=connectDB