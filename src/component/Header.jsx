import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Header = ({user}) => {
     const navigate = useNavigate();
      const handleLogout = async () => {
        try {
          await axios.post(
            `${import.meta.env.VITE_APP_BACKENDURL}/api/auth/logout`,
            {},
            { withCredentials: true }
          );
          navigate("/");
        } catch (error) {
          console.error("Logout failed:", error);
        }
      };
  return (
          <nav className="flex items-center justify-between bg-purple-600 px-6 py-4 text-white shadow-lg">
            <Link to="/home" className="text-2xl font-bold hover:text-yellow-300">
              SweetCorner
            </Link>
    
            <div className="flex items-center gap-6">
              {user?.isAdmin && (
                <>
                  <Link
                    to="/add-sweet"
                    className="hover:text-yellow-300 font-semibold"
                  >
                    Add Sweet
                  </Link>
                  
                </>
              )}
              {user && (
                <>
                  <div className="font-semibold">{user?.name}</div>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 cursor-pointer px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </nav>
    
  )
}

export default Header
