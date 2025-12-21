import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import axios from "axios";
import { toast } from "react-toastify";

const NoticeDetailPage = () => {
  const { id } = useParams()
  const navigate=useNavigate()
  
  const [noticeDetail,setNoticeDetail] = useState({});

  useEffect(()=>{
     const fetchNoticeDetail = async () => {
      try{
        const res = await axios.get(`http://localhost:3000/notices/${id}`);
        setNoticeDetail(res.data);
      }
      catch(err){
        console.error(err);
      }
     }
     fetchNoticeDetail();
  },[id])
  
const handleDelete=async()=>{
  const res=await axios.delete(`http://localhost:3000/notices/${id}`);
  toast.success(res.message)
  navigate("/notices")
}

  return (
    <>
    <div className="flex justify-evenly flex-row-reverse items-center min-h-screen my-10">
         <img
        src={noticeDetail.image}
        alt={noticeDetail.title}
        className="w-120 h-auto border-gray-600 border-2"
      />
      <div className="w-150">
       <h1 className="text-xl font-bold mt-4">{noticeDetail.title}</h1>
      <p className="mt-2">{noticeDetail.content}</p>
      </div>
    </div>
    <div className="flex justify-around">
     <button onClick={handleDelete} className="m-10 px-3 py-2 bg-red-600 rounded-lg text-white mt-8">Delete</button>
     <button className="m-10 px-3 py-2 bg-blue-600 rounded-lg text-white mt-8">Update</button>
     </div>
    </>
  )
}

export default NoticeDetailPage