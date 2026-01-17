import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbChartTreemap } from "react-icons/tb";
import { MdShoppingCart } from "react-icons/md";
import { TbTransactionRupee } from "react-icons/tb";

const Sidebar = ({ active, setActive }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <div className={`p-2 ${collapsed ? "w-[5%]" : "w-full"}`}>
        <div className="text-xl font-bold p-2 flex gap-3 items-center">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex items-center gap-3"
          >
            <RxHamburgerMenu />
          </button>
          {!collapsed && <span>User Dashboard</span>}
        </div>
        <hr />
        <div className="grid gap-3 p-3 ">
          <button
            className={`flex gap-3 items-center  p-3 rounded-xl ${
              active === "overview"
                ? "bg-(--secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
            onClick={() => setActive("overview")}
          >
            <TbChartTreemap />
            {!collapsed && "Overview"}
          </button>
          <button
            className={`flex gap-3 items-center  p-3 rounded-xl ${
              active === "profile"
                ? "bg-(--secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
            onClick={() => setActive("profile")}
          >
            {" "}
            <CgProfile />
            {!collapsed && "Profile"}
          </button>
          <button
            className={`flex gap-3 items-center  p-3 rounded-xl ${
              active === "order"
                ? "bg-(--secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
            onClick={() => setActive("order")}
          >
            <MdShoppingCart />
           {!collapsed && "Orders"}
          </button>
          <button
            className={`flex gap-3 items-center  p-3 rounded-xl ${
              active === "transaction"
                ? "bg-(--secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
            onClick={() => setActive("transaction")}
          >
            <TbTransactionRupee />
            {!collapsed && "Transactions"}
          </button>
          <button
            className={`flex gap-3 items-center  p-3 rounded-xl ${
              active === "helpdesk"
                ? "bg-(--secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
            onClick={() => setActive("helpdesk")}
          >
            {" "}
            <RiCustomerService2Fill />
            {!collapsed && "Help Desk"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
