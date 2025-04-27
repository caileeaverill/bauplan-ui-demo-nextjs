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
        <div className="rounded-md p-4">
            <h2 className="text-3xl font-bold mb-2">Recent Activity</h2>
            <ScrollArea className="h-[400px] rounded-md p-4">
                {activities.map((activity, idx) => (
                    <ul key={idx}>
                        <li className="flex items-center justify-between border-b border-slate-800 pb-3 first:pt-2 last:border-none">
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
                                    <span className="font-medium text-white">{activity.user}</span>{" "}
                                    <span className="text-slate-400">{activity.action}</span>
                                </div>
                            </div>
                            <div className="min-w-[50px] text-right">
                                <span className="text-xs text-zinc-300 font-light">{activity.time}</span>
                            </div>
                        </li>
                    </ul>
                ))}
                {showChevron && (
                    <div className="pointer-events-none absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-px h-4 bg-slate-800 animate-bounce">
                        <LucideChevronDown size={20} />
                    </div>
                )}
            </ScrollArea>
        </div>
    )
}

export default RecentActivity;