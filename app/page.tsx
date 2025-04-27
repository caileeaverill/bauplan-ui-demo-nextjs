import HomeDate from "./HomeDate";
import HomeMetrics from "./HomeMetrics";
import PerformanceOverview from "./PerformanceOverview";
import RecentActivity from "./RecentActivity";
import UserWelcome from "./UserWelcome";

function Page() {
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

export default Page;