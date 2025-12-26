import { Link } from "react-router"

const Header = () => {
  return (
    <nav className="flex justify-between border-b border-[#73E6CB] shadow-sm text-[#0A3C30] items-center p-4 bg-[#ECFDF7]">
      <Link to="/" className="flex gap-2 items-center">
      <img src="/logo.png" alt="logo" className="rounded-[50px] w-12.5 h-12.5"/>
      <h1 className="text-2xl font-bold">NoticeZone</h1>
      </Link>
      <div className="flex gap-8 items-center ">
        <Link to="/">Home</Link>
        <Link to="/notices">All Notices</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/login"> <button className="bg-[#00674F] text-white text px-3 pb-2 pt-1 rounded-lg hover:bg-[#0A3C30]">
          Login
        </button></Link>
        <Link to="/register"> <button className="bg-[#3EBB9E] text-[#0A3C30] text px-3 pb-2 pt-1 rounded-lg hover:bg-[#73E6CB]">
          SignUp
        </button></Link>
      </div>
    </nav>
  )
}

export default Header