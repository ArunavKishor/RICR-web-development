import React, { useState } from "react";
import Sidebar from "../../components/userDashboard/Sidebar";
import Overview from "../../components/userDashboard/UserOverview";
import Profile from "../../components/userDashboard/UserProfile";
import Order from "../../components/userDashboard/UserOrder";
import Transaction from "../../components/userDashboard/UserTransaction";
import HelpDesk from "../../components/userDashboard/UserHelpDex";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  return (
    <>
      <div className="w-full flex  h-[90vh]">
        <div className=" w-2/11 bg-(--color-background)">
          <Sidebar active={active} setActive={setActive} />
        </div>
        <div className=" w-9/11">
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