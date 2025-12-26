import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

const NoticeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [noticeDetail, setNoticeDetail] = useState({});

  useEffect(() => {
    const fetchNoticeDetail = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/notices/${id}`);
        setNoticeDetail(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNoticeDetail();
  }, [id]);

  const handleDelete = async () => {
    const res = await axios.delete(`http://localhost:3000/notices/${id}`);
    toast.success("Notice deleted successfully");
    navigate("/notices");
  };

  return (
    <div className="min-h-screen bg-[#ECFDF7] px-6 py-12">

      {/* Main Card */}
      <div className="
    max-w-7xl 
    mx-auto 
    bg-white 
    border border-[#73E6CB] 
    rounded-2xl 
    shadow-lg 
    p-10
    flex flex-col md:flex-row
    gap-12
    items-start
  ">
        <div className="
        w-full 
        md:w-1/2 
        min-h-150
        bg-[#F0FDFA]
        border border-[#73E6CB]
        rounded-xl
        flex 
        items-center 
        justify-center
        p-4
      ">
          <img
            src={noticeDetail.image}
            alt={noticeDetail.title}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col">
          <h1 className="text-3xl font-bold text-[#0A3C30] text-center mb-6">
            {noticeDetail.title}
          </h1>

          <p className="text-[#4B8376] text-center text-xl leading-relaxed">
            {noticeDetail.content}
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto flex justify-end gap-5 mt-10">
        <button
          onClick={handleDelete}
          className="px-6 py-3 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
        >
          Delete
        </button>

        <button
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Update
        </button>
      </div>

    </div>

  );
};

export default NoticeDetailPage;
