import React, { useState } from "react";
import Sidebar from "../../components/userDashboard/Sidebar";
import Overview from "../../components/userDashboard/UserOverview";
import Profile from "../../components/userDashboard/UserProfile";
import Order from "../../components/userDashboard/UserOrder";
import Transaction from "../../components/userDashboard/UserTransaction";
import HelpDesk from "../../components/userDashboard/UserHelpDex";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div className="w-full flex h-[90vh]">
        <div
          className={`bg-(--background) ${collapsed ? "w-[5%]" : "w-[20%]"}`}
        >
          <Sidebar
            active={active}
            setActive={setActive}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
          />
        </div>
        <div className={`${collapsed ? "w-[95%]" : "w-[80%]"}`}>
          {active === "overview" && <Overview />}
          {active === "profile" && <Profile />}
          {active === "order" && <Order />}
          {active === "transaction" && <Transaction />}
          {active === "helpdesk" && <HelpDesk />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
