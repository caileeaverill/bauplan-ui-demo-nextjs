import HomeDate from "../components/home/HomeDate";
import HomeMetrics from "../components/home/HomeMetrics";
import PerformanceOverview from "../components/home/PerformanceOverview";
import RecentActivity from "../components/home/RecentActivity";
import UserWelcome from "../components/home/UserWelcome";

function page() {
  return (
    <div className="grid grid-cols-2 gap-8 text-white">
      <UserWelcome />
      <HomeDate />
      <div className="col-span-2">
        <HomeMetrics />
      </div>
      <PerformanceOverview />
      <RecentActivity />
    </div>
  );
}

export default page;