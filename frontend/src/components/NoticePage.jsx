import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";

const NoticePage = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      const res = await axios.get(`http://localhost:3000/notices`);
      setNotices(res.data);
    };
    fetchNotices();
  }, []);

  return (
    <div className="min-h-screen bg-[#ECFDF7] px-6 py-10">
      
      <h1 className="text-3xl font-bold text-center text-[#0A3C30] mb-10">
        All Notices
      </h1>

      <div className="max-w-5xl mx-auto grid gap-6">
        {notices.map((notice) => (
          <div
            key={notice._id}
            className="bg-white border border-[#73E6CB] rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-[#00674F] text-center mb-3">
              {notice.title}
            </h2>

            <p className="text-[#4B8376] text-center text-base line-clamp-3">
              {notice.content}
            </p>

            <div className="flex justify-center mt-6">
              <Link to={`/notices/${notice._id}`}>
                <button className="bg-[#00674F] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#0A3C30] transition">
                  View Full Notice
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default NoticePage;
