'use client'
import React, { useState } from "react";
import usePostLogin from "../hooks/usePostLogin";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Login: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    school_name: "",
    password: "",
  });
  const { login, error, isLoading } = usePostLogin();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await login(formData);

    
      Cookies.set("userToken", "your_token_here", { expires: 30 }); 
      router.push("/dashboard");
    } catch (error) {
      console.error("Authentication failed:", error);
    
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="sidebar-div p-5 pt-48 text-center">
      
          <form onSubmit={handleSubmit} className="mt-5">
          
            <div className="mb-4 flex justify-center">
              <input
                type="text"
                placeholder="School Name"
                name="school_name"
                value={formData.school_name}
                onChange={handleInputChange}
                className="px-4 py-4 border border-gray-300 rounded text-sm text-black mb-2 placeholder-gray-600 font-medium"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="px-4 py-4 border border-gray-300 rounded text-sm text-black mb-2 placeholder-gray-600 font-medium"
                required
              />
            </div>
            <button
              className="bg-blue-500 text-white text-sm font-bold px-28 py-4 mb-4 mb-10 rounded"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
          <Link href="/signup">
            <p className="text-gray-600 text-sm pt-8">
              Already have an account? <b className="text-blue-500">Sign up</b>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
