'use client';

import { useEffect, useState } from "react";
import { sleep } from "@/lib/sleep";
import { useAppSettings } from "@/context/AppSettingsContext";
import Loading from "./loading"; // ← ADD THIS LINE
import HomeDate from "@/components/home/HomeDate";
import HomeMetrics from "@/components/home/HomeMetrics";
import PerformanceOverview from "@/components/home/PerformanceOverview";
import RecentActivity from "@/components/home/RecentActivity";
import UserWelcome from "@/components/home/UserWelcome";

export default function Page() {
  const { loadingTime } = useAppSettings();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function simulateLoading() {
      await sleep(loadingTime);
      setIsLoading(false);
    }

    simulateLoading();
  }, [loadingTime]);

  if (isLoading) {
    return <Loading />; // ← SHOW YOUR BOUNCING LOGO WHILE LOADING
  }

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