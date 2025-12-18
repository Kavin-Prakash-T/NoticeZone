const User = require("../models/User");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")

const registerUser = async (req, res) => {
    try {
        const { name, email, password,role } = req.body;
        const existingUser=await User.findOne({email});
        if(existingUser){
            res.status(400).json({error:"User already exist"});
            return;
        }
        const hashpassword=await bcrypt.hash(password,10);
        const user = await User.create({ name, email, password:hashpassword ,role});
        res.status(201).json({ message: "User created succesfully",user })
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}


const loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=await User.findOne({email});
        if(!user){
            res.status(400).json({error:"User Not Found"})
            return
        }
        const isPasswordCorrect=await bcrypt.compare(password,user.password);
        if(!isPasswordCorrect){
            res.status(400).json({error:"Invalid Passowrd"});
            return;
        }
        const token=jwt.sign(
            {id:user._id,email:user.email},
            "strangerthings",
            {expiresIn:"1h"}
        )

        res.status(200).json({message:"Login Successful",token:token,role:user.role})
    }catch(err){
        res.status(400).json({error:err.message})
    }
}



module.exports = { registerUser,loginUser }