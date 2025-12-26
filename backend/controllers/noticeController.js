const Notice = require('../models/Notice');

const getNotices = async (req, res) => {
    try{
        const notices=await Notice.find()
        res.status(200).json(notices)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

const addNotice = async (req, res) => {
    const { title, content,image } = req.body;
    try {
        const newNotice=await Notice.create({ title, content, image });
        res.status(201).json({ message: 'Notice added successfully', notice: newNotice });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getNoticesById = async (req, res) => {
 
    const id=req.params.id;
    try{
       const notice= await Notice.findById(id);
        res.status(200).json(notice);
    }
    catch(err){
        res.status(500).json({message:err.message})
    }

}

const deleteNotice=async(req,res)=>{
    const id=req.params.id;
    try{
        await Notice.deleteOne({_id: id})
        res.status(200).json({ message: 'Notice deleted successfully' });
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

const updateNotice=async(req,res)=>{
    const id=req.params.id;
    const { title, content,image } = req.body;
    try{
        const updatedNotice=await Notice.findByIdAndUpdate(id,{ title, content, image },{new:true});
        res.status(200).json({ message: 'Notice updated successfully',notice:updatedNotice });
    }   
    catch(err){
        res.status(500).json({message:err.message})
    }
}

module.exports = { getNotices, addNotice,getNoticesById,deleteNotice,updateNotice };