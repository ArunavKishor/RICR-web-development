import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import RestaurantSideBar from "../../components/restaurantDashboard/RestaurantSideBar";
import RestaurantOverview from "../../components/restaurantDashboard/RestaurantOverview";
import RestaurantOrders from "../../components/restaurantDashboard/RestaurantOrders";
import RestaurantMenu from "../../components/restaurantDashboard/RestaurantMenu";
import RestaurantEarnings from "../../components/restaurantDashboard/RestaurantEarning";
import RestaurantProfile from "../../components/restaurantDashboard/RestaurantProfile";

const RestaurantDashboard = () => {
  const { role, isLogin } = useAuth();
  const navigate = useNavigate();

  const [active, setActive] = useState("overview");
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, [isLogin]);

  if (role !== "manager") {
    return (
      <div className="p-5 text-center text-red-600">
        Unauthorized Access
      </div>
    );
  }

  return (
    <div className="w-full h-[90vh] flex">
      
      <div
          className={`bg-(--background) duration-300 ${isCollapsed ? "w-2/60" : "w-12/60"}`}
        >
          <RestaurantSideBar
            active={active}
            setActive={setActive}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </div>
      
      <div className={`${isCollapsed ? "w-58/60" : "w-48/60"} duration-300`}>
        {active === "overview" && <RestaurantOverview />}
        {active === "orders" && <RestaurantOrders />}
        {active === "menu" && <RestaurantMenu />}
        {active === "earnings" && <RestaurantEarnings />}
        {active === "profile" && <RestaurantProfile />}
      </div>
    </div>
  );
};

export default RestaurantDashboard;