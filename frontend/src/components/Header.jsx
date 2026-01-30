import { useEffect, useState } from "react"
import { Link } from "react-router"
import { Menu, X } from "lucide-react"

const Header = () => {

  const [role, setRole] = useState(sessionStorage.getItem("role"))
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setRole(sessionStorage.getItem("role"))
  }, [])

  return (
    <nav className="border-b border-[#73E6CB] shadow-sm text-[#0A3C30] bg-[#ECFDF7]">
      <div className="flex justify-between items-center p-4 w-full">
        <Link to="/" className="flex gap-2 items-center">
          <img src="/logo.svg" alt="logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">NoticeZone</h1>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link to="/">Home</Link>
          <Link to="/notices">All Notices</Link>
          {role === "admin" && <Link to="/admin">Admin</Link>}
          <Link to="/login">
            <button className="bg-[#00674F] text-white px-3 pb-2 pt-1 rounded-lg hover:bg-[#0A3C30]">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-[#3EBB9E] text-[#0A3C30] px-3 pb-2 pt-1 rounded-lg hover:bg-[#73E6CB]">
              SignUp
            </button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-[#73E6CB] bg-white p-4">
          <div className="flex flex-col gap-4">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/notices" onClick={() => setIsOpen(false)}>All Notices</Link>
            {role === "admin" && <Link to="/admin" onClick={() => setIsOpen(false)}>Admin</Link>}
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-[#00674F] text-white px-3 py-2 rounded-lg hover:bg-[#0A3C30]">
                Login
              </button>
            </Link>
            <Link to="/register" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-[#3EBB9E] text-[#0A3C30] px-3 py-2 rounded-lg hover:bg-[#73E6CB]">
                SignUp
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header