import { useEffect, useState } from "react"
import { Link } from "react-router"
import axios from "axios"

const NoticePage = () => {

    const [notices,setNotices] = useState([])

    useEffect(()=>{
      const fetchNotices = async () => {
        const res=await axios.get(`http://localhost:3000/notices`)
        setNotices(res.data)
      }
      fetchNotices()
    },[])


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mt-10">All Notices</h1>
      <div className="mt-5">
        {
          notices.map((notice)=>{
            return (
              <div key={notice._id} className="flex flex-col border-2 border-gray-300 rounded-lg p-5 m-5 w-200">
                <h2 className="text-center text-xl font-semibold m-5">{notice.title}</h2>
                <p className="text-lg text-center">{notice.content}</p>
                <Link to={`/notices/${notice._id}`} className=" mx-auto"><button  className="px-3 py-2 bg-blue-600 rounded-lg text-white mt-8">View Full Notice</button></Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default NoticePage