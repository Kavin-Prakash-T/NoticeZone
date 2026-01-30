import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

const NoticeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [role, setRole] = useState(sessionStorage.getItem("role"))
  useEffect(() => {
    setRole(sessionStorage.getItem("role"))
  }, [])

  const [noticeDetail, setNoticeDetail] = useState({});

  useEffect(() => {
    const fetchNoticeDetail = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/notices/${id}`);
        setNoticeDetail(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNoticeDetail();
  }, [id]);

  const handleDelete = async () => {
    const res = await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/notices/${id}`);
    toast.success("Notice deleted successfully");
    navigate("/notices");
  };

  const handleUpdate = () => {
    sessionStorage.setItem("updateId", id);
    navigate(`/admin`);
  }

  return (
    <div className="min-h-screen bg-[#ECFDF7] px-4 sm:px-6 py-6 sm:py-12">

      <div className="max-w-7xl mx-auto bg-white border border-[#73E6CB] rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-10 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 items-start">
        <div className="w-full md:w-1/2 flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0A3C30] text-center mb-4 sm:mb-6">
            {noticeDetail.title}
          </h1>

          <p className="text-[#4B8376] text-center text-base sm:text-lg md:text-xl leading-relaxed">
            {noticeDetail.content}
          </p>
        </div>

        <div className="w-full md:w-1/2 bg-[#F0FDFA] border border-[#73E6CB] rounded-xl overflow-auto" style={{ maxHeight: '80vh' }}>
          <iframe
            src={`https://docs.google.com/viewer?url=${encodeURIComponent(noticeDetail.pdfUrl)}&embedded=true`}
            className="w-full h-100 sm:h-125 md:h-150 lg:h-125 border-0"
            title="Notice PDF"
          />
        </div>

      </div>

      {(role === "admin" &&
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-end gap-3 sm:gap-5 mt-6 sm:mt-10">
          <button
            onClick={handleDelete}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
          >
            Delete
          </button>

          <button
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      )}

    </div>

  );
};

export default NoticeDetailPage;
