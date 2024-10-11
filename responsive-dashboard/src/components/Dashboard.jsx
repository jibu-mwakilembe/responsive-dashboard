import { Link } from "react-router-dom";
import DashboardStartGrid from "./DashboardStartGrid";
import TransactionChart from "./TransactionChart";
import BuyerChart from "./BuyerChart";
import RecentOrder from "./RecentOrder";
import PopularProduct from "./PopularProduct";
export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col p-5  gap-4">
        <DashboardStartGrid />
        <div className="flex flex-row w-full gap-4">
          <TransactionChart />
          <BuyerChart />
        </div>
        <div className="flex flex-row w-full gap-4">
          <RecentOrder />
          <PopularProduct />
        </div>
      </div>
    </>
  );
}
