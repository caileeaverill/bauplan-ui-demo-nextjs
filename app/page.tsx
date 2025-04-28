'use client';

import { useEffect, useState } from "react";
import { sleep } from "@/lib/sleep";
import { useAppSettings } from "@/context/AppSettingsContext";
import { useUser } from "@/context/UserContext";
import HomeDate from "../components/home/HomeDate";
import HomeMetrics from "../components/home/HomeMetrics";
import PerformanceOverview from "../components/home/PerformanceOverview";
import RecentActivity from "../components/home/RecentActivity";
import UserWelcome from "../components/home/UserWelcome";
import Loading from "./loading";
import UserInfoModal from "@/components/globals/UserInfoModal";


export default function Page() {
  const user = useUser();
  const { loadingTime } = useAppSettings();
  const [isLoading, setIsLoading] = useState(true);
  const [showUserInfoModal, setShowUserInfoModal] = useState(false);

  useEffect(() => {
    async function simulateLoading() {
      await sleep(loadingTime);
      const userId = localStorage.getItem("userId");
      if (!userId) {
        setShowUserInfoModal(true);
      }
      setIsLoading(false);
    }

    simulateLoading();
  }, [loadingTime]);

  if (isLoading) {
    return <Loading />;
  }

  if (showUserInfoModal) {
    return <UserInfoModal />;
  }

  return (
    <div className="grid grid-cols-2 gap-8 text-white">
      <UserWelcome name={user?.name} />
      <HomeDate />
      <div className="col-span-2">
        <HomeMetrics />
      </div>
      <PerformanceOverview />
      <RecentActivity />
    </div>
  );
}