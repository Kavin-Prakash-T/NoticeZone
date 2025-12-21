import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const NoticeDataForm = () => {

  const navigate=useNavigate()

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async(e) => {
    const noticeData={title,content,image}
    const res=await axios.post(`http://localhost:3000/notices`,noticeData)
    toast.success("Notice Posted Successfully")
    navigate("/notices")
  }

  return (
    <>
      <div className="min-h-screen">
        <h2>Notice Data Form</h2>
        <div className="border-2 border-gray-300 rounded-lg p-5 m-5 w-200 shadow-sm">
          <div className="mb-4 flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" className="border-2 border-gray-400 w-100" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <label htmlFor="content">Content</label>
            <input type="text" id="content" className="border-2 border-gray-400 w-100" value={content} onChange={(e) => setContent(e.target.value)}/>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <label htmlFor="image">Image</label>
            <input type="text" id="image" className="border-2 border-gray-400 w-100" value={image} onChange={(e)=>setImage(e.target.value)}/>
          </div>
          <button onClick={handleSubmit} className="bg-blue-600 px-3 py-2 rounded-sm text-white">Submit</button>
        </div>
      </div>
    </>
  )
}

export default NoticeDataForm