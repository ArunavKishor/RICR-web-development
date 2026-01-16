import React from "react";
import UserSideBar from "../../components/userDashboard/UserSideBar";
import UserOverview from "../../components/userDashboard/UserOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrder from "../../components/userDashboard/UserOrder";
import UserTransaction from "../../components/userDashboard/UserTransaction";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";

const UserDashBord = () => {
  const [active, setActive] = useState("overview");
  return (
    <>
      <div className="w-full h-[90vh] flex">
        <div className="bg-(--background) w-1/7">
          <UserSideBar active={active} setActive={setActive} />
        </div>
        <div className="border border-orange-500 w-6/7">
          {active === "overview" && <UserOverview />}
          {active === "profile" && <UserProfile />}
          {active === "orders" && <UserOrder />}
          {active === "transaction" && <UserTransaction />}
          {active === "helpdex" && <UserHelpDesk />}
        </div>
      </div>
    </>
  );
};

export default UserDashBord;
