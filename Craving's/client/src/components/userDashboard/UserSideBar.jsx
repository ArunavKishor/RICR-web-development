import React from "react";
import { FaRegChartBar } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { IoPersonOutline } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";

const UserSideBar = ({ active, setActive }) => {
  return (
    <>
      <div className="p-3">
        <div className="text-xl font-bold">User Dashbord</div>
        <hr />
        <div className="grid gap-3 p-6">
          <button
            className="flex gap-3 items-center"
            onClick={() => setActive("Overview")}
          >
            {" "}
            <FaRegChartBar />
            Overview
          </button>
          <button
            className="flex gap-3 items-center"
            onClick={() => setActive("Profile")}
          >
            {" "}
            <IoPersonOutline />
            Profile
          </button>
          <button
            className="flex gap-3 items-center"
            onClick={() => setActive("Orders")}
          >
            {" "}
            <TiShoppingCart />
            Orders
          </button>
          <button
            className="flex gap-3 items-center"
            onClick={() => setActive("Transactions")}
          >
            {" "}
            <FaIndianRupeeSign />
            Transactions
          </button>
          <button
            className="flex gap-3 items-center"
            onClick={() => setActive("Help Desk")}
          >
            {" "}
            <RiCustomerService2Line />
            Help Desk
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSideBar;
