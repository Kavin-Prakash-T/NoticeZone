import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { toast } from "react-toastify";

const NoticeDataForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const noticeData = { title, content, image };
    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/notices`, noticeData);
    toast.success("Notice Posted Successfully");
    navigate("/notices");
  };

  return (
    <div className="min-h-screen bg-emerald-50">
      <div className="flex justify-end text-white p-8">
        <Link to="/"><button className="bg-white border-[#3EBB9E] text-[#00674F] px-3 py-1 pb-2 rounded-lg hover:bg-[#ECFDF7]">
          Home
        </button></Link>
      </div>
      <div className="flex justify-center mt-15">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full max-w-lg rounded-xl shadow-lg border border-emerald-200 p-6"
        >
          <h2 className="text-2xl font-semibold text-emerald-900 mb-6 text-center">
            Post New Notice
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-emerald-800 mb-1">
              Title
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-emerald-800 mb-1">
              Content
            </label>
            <textarea
              rows="4"
              className="w-full rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-emerald-800 mb-1">
              Image URL
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-700 text-white py-2.5 rounded-lg font-semibold hover:bg-emerald-900 transition"
          >
            Submit Notice
          </button>
        </form>
      </div>

    </div>
  );
};

export default NoticeDataForm;
