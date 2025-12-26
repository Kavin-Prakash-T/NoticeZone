import {Link} from "react-router"

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#ECFDF7] flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-[#0A3C30] leading-tight">
          One Place for All Important Announcements
        </h1>

        <p className="mt-6 text-lg text-[#4B8376]">
          Stay updated with official notices, announcements, and important updates.
          A fast, reliable, and paper-free digital notice board for institutions
          and organizations.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link to="/notices" className="bg-[#00674F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0A3C30] transition">
            View Notices
          </Link>

          <Link to="/admin" className="border border-[#3EBB9E] text-[#00674F] px-6 py-3 rounded-lg font-semibold hover:bg-[#ECFDF7] transition">
            Admin Login
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Hero;
