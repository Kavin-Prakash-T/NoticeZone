import { Navigate } from "react-router";

const ProtectedRoute = ({children}) => {

  const isLoggedIn=sessionStorage.getItem("isLoggedIn");
  const token=sessionStorage.getItem("token")
  const role=sessionStorage.getItem("role")

  return (
    (isLoggedIn && role==="admin" && token )? children : (isLoggedIn && token) ? <Navigate to="/" /> : <Navigate to="/login" />
  )
}

export default ProtectedRoute