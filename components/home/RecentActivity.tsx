'use client'

import { useState, useEffect } from "react";
import { fakeActivity } from "@/lib/fakeActivity"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LucideChevronDown } from "lucide-react"

function RecentActivity() {
    const [activities, setActivities] = useState<typeof fakeActivity>([]);
    const [showChevron, setShowChevron] = useState(true);

    useEffect(() => {
        // Only set activities after client-side hydration
        setActivities(fakeActivity);

        const timer = setTimeout(() => {
            setShowChevron(false);
        }, 7000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="rounded-md py-4 text-black dark:text-white" aria-label="Recent Activity">
            <h2 className="text-3xl font-bold mb-2">Recent Activity</h2>
            <ScrollArea className="h-[400px] rounded-md">
                <ul>
                    {activities.map((activity, idx) => (
                        <li key={idx} className="flex items-center my-2 justify-between border-b border-slate-300 dark:border-slate-800 pb-3 first:pt-2 last:border-none">
                            <div className="flex gap-4 items-center text-sm text-zinc-300">
                                <Avatar>
                                    <AvatarImage src={activity.avatar} />
                                    <AvatarFallback>
                                        {activity.user
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")
                                            .toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <span className="font-medium text-black dark:text-white">{activity.user}</span>{" "}
                                    <span className="text-slate-600 dark:text-slate-400">{activity.action}</span>
                                </div>
                            </div>
                            <div className="min-w-[75px] text-right pr-2">
                                <span className="text-xs  font-light">{activity.time}</span>
                            </div>
                        </li>
                    ))}
                </ul>
                {showChevron && (
                    <div className="pointer-events-none absolute -bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <LucideChevronDown size={20} className="text-slate-800 dark:text-slate-400" />
                    </div>
                )}
            </ScrollArea>
        </section>
    )
}

export default RecentActivity;