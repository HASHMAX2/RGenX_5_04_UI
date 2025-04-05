import React from "react";
import "../index.css";
import Rgenx_logo from "../assets/Rgenx_logo.png";
import Vgenomics_logo from "../assets/Vgenomics_logo.png";
import DnaPerson from "../assets/dna_person.png";
const LoginForm = () => {
  return (
    <>
      <div className="flex h-screen">
        {/* Left half - Logos + Login Form */}
        <div className="w-1/2 flex flex-col bg-white px-8 py-6 relative overflow-auto">
          {/* Top Logo */}
          <div className="flex justify-between items-center mb-8">
            <img src={Rgenx_logo} alt="RDX Logo" className="h-10" />
          </div>

          {/* Login Form - Now properly visible */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-lg bg-white p-10 rounded-lg shadow-sm">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">Log in</h2>
                <p className="text-gray-600">Welcome back to RgenX</p>
              </div>

              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-md mb-4"
                  placeholder="Enter your email"
                />

                <label className="block mb-2 font-medium">Password</label>
                <input
                  type="password"
                  className="w-full p-3 border rounded-md mb-4"
                  placeholder="********"
                />
              </div>

              <div className="flex justify-between items-center mb-6">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <a href="#" className="text-blue-600 text-sm">
                  Forgot password?
                </a>
              </div>

              <button className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800">
                Sign in
              </button>

              <p className="text-center mt-6 text-sm">
                Don't have an account?{" "}
                <a href="#" className="text-blue-600">
                  Sign up
                </a>
              </p>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div className="text-xs text-gray-500">
              © 2025 RgenX by Vgenomics. All rights reserved. This system is
              HIPAA-compliant.
            </div>
            <img src={Vgenomics_logo} alt="Vgenomics Logo" className="h-8" />
          </div>
        </div>

        {/* Right half - Image */}
        <div className="w-1/2 h-full bg-gray-100 flex items-center justify-center">
          <img
            src={DnaPerson}
            alt="DNA Illustration"
            className="h-full w-auto max-w-full object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default LoginForm;
