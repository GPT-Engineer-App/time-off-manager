import React, { useState } from "react";
import { FaPlus, FaLock, FaUser, FaEnvelope, FaCalendarAlt, FaProjectDiagram, FaClock, FaUserShield, FaSignOutAlt } from "react-icons/fa";
import "tailwindcss/tailwind.css";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFirstLogin, setIsFirstLogin] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [user, setUser] = useState({ employeeNumber: "", password: "" });
  const [newPassword, setNewPassword] = useState("");
  const [forgotPasswordEmployeeNumber, setForgotPasswordEmployeeNumber] = useState("");

  const handleLogin = () => {
    // Mock login logic
    if (user.employeeNumber === "123" && user.password === "password") {
      setIsLoggedIn(true);
    } else if (user.employeeNumber === "new") {
      setIsFirstLogin(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleFirstLogin = () => {
    // Mock first login logic
    if (newPassword.length >= 8) {
      setIsLoggedIn(true);
      setIsFirstLogin(false);
    } else {
      alert("Password must be at least 8 characters long");
    }
  };

  const handleForgotPassword = () => {
    // Mock forgot password logic
    if (forgotPasswordEmployeeNumber === "123") {
      alert("Password reset link sent to your email");
      setIsForgotPassword(false);
    } else {
      alert("Employee number not found");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {!isLoggedIn && !isFirstLogin && !isForgotPassword && (
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Employee Number</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" value={user.employeeNumber} onChange={(e) => setUser({ ...user, employeeNumber: e.target.value })} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded mt-4" onClick={handleLogin}>
            Login
          </button>
          <button className="w-full text-blue-500 p-2 mt-4" onClick={() => setIsForgotPassword(true)}>
            Forgot Password?
          </button>
        </div>
      )}

      {isFirstLogin && (
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Set New Password</h2>
          <div className="mb-4">
            <label className="block text-gray-700">New Password</label>
            <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded mt-4" onClick={handleFirstLogin}>
            Set Password
          </button>
        </div>
      )}

      {isForgotPassword && (
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Employee Number</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" value={forgotPasswordEmployeeNumber} onChange={(e) => setForgotPasswordEmployeeNumber(e.target.value)} />
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded mt-4" onClick={handleForgotPassword}>
            Reset Password
          </button>
        </div>
      )}

      {isLoggedIn && (
        <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-200 p-4 rounded flex items-center">
              <FaUser className="text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-bold">Profile</h3>
                <p>View and edit your profile</p>
              </div>
            </div>
            <div className="bg-gray-200 p-4 rounded flex items-center">
              <FaCalendarAlt className="text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-bold">Calendar</h3>
                <p>View your calendar</p>
              </div>
            </div>
            <div className="bg-gray-200 p-4 rounded flex items-center">
              <FaProjectDiagram className="text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-bold">Projects</h3>
                <p>Manage your projects</p>
              </div>
            </div>
            <div className="bg-gray-200 p-4 rounded flex items-center">
              <FaClock className="text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-bold">Time Tracking</h3>
                <p>Track your working hours</p>
              </div>
            </div>
            <div className="bg-gray-200 p-4 rounded flex items-center">
              <FaUserShield className="text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-bold">Admin</h3>
                <p>Admin settings</p>
              </div>
            </div>
            <div className="bg-gray-200 p-4 rounded flex items-center">
              <FaSignOutAlt className="text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-bold">Logout</h3>
                <p>Sign out of your account</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
