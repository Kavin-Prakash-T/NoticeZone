import { Link } from "react-router"

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-slate-700">
      <h1 className="text-2xl font-bold text-white">NoticeZone</h1>
      <div className="flex gap-8 text-white">
        <Link to="/">Home</Link>
        <Link to="/notices">All Notices</Link>
        <Link to="/login"> <button className="bg-blue-600 px-3 py-1 rounded-lg hover:bg-blue-700">
          Login
        </button></Link>
        <Link to="/register"> <button className="bg-green-600 px-3 py-1 rounded-lg hover:bg-green-700">
          SignUp
        </button></Link>
      </div>
    </nav>
  )
}

export default Header