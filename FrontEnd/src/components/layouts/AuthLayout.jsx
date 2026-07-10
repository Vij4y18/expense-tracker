import React from "react";
import Card2 from "../../assets/images/Card2.png";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">
          Expense Tracker
        </h2>

        <div className="flex items-center h-[calc(100vh-80px)]">
          {children}
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:block w-[40vw] h-screen bg-violet-50 overflow-hidden relative">
        
        {/* Decorative Shapes */}
        <div className="w-48 h-48 rounded-[40px] bg-purple-700 absolute top-0 left-0"></div>

        <div className="w-48 h-56 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[35%] -right-16"></div>

        <div className="w-48 h-48 rounded-[40px] bg-violet-500 absolute bottom-0 left-0"></div>

        {/* Top Card */}
        <div className="absolute top-8 left-8 right-8 z-20">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track your Income & Expenses"
            value="430,000"
            color="bg-purple-600"
          />
        </div>

        {/* Chart Image */}
        <img
          src={Card2}
          alt="Expense Tracker Card"
          className="w-[90%] absolute bottom-10 left-8 z-10 drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-lg">
      <div
        className={`w-12 h-12 flex items-center justify-center text-[24px] text-white ${color} rounded-full`}
      >
        {icon}
      </div>

      <div>
        <h6 className="text-sm text-gray-500">
          {label}
        </h6>

        <span className="text-3xl font-semibold text-gray-900">
          ${value}
        </span>
      </div>
    </div>
  );
};






