import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import toast from "react-hot-toast";

const LogoutPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    toast.success("Logout successfully");
    navigate("/login");
  };

  useEffect(() => {
    // Display the UI first, then logout and navigate after a short delay
    const timer = setTimeout(() => {
      AuthService.logout();
      navigate("/login");
    }, 10000); //

    return () => clearTimeout(timer); // Clear timeout if component unmounts early
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 p-8 bg-white rounded shadow-md text-center">
        <h2 className="text-2xl font-bold mb-6">Logout</h2>
        <p className="mb-4">Are you sure you want to logout?</p>
        <div className="flex justify-between">
          <button
            onClick={handleLogout}
            className="w-full p-2 bg-red-500 text-white rounded mr-2"
          >
            Yes, Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
