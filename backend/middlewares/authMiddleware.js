const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>{
    const token =req.headers.authorization;
    if(!token){
        res.status(401).json({error:"Unauthorized"})
        return
    }
    try{
        const decoded=jwt.verify(token,process.env.SECRET_KEY)
        req.userData={id:decoded.id,email:decoded.email,role:decoded.role}
        next()
    }catch(err){
        res.status(401).json({error:"Unauthorized",message:err.message})
        return
    }
}

module.exports=auth;