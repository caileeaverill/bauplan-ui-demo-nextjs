import { useAppSettings } from "@/context/AppSettingsContext";

interface SidebarFooterProps {
    collapsed: boolean;
}

export default function SidebarFooter({ collapsed }: SidebarFooterProps) {
    const { systemStatus } = useAppSettings();

    const statusColor = {
        up: "bg-green-500",
        down: "bg-red-500",
        disruptions: "bg-yellow-400",
    }[systemStatus];

    return (
        <div className={`flex flex-col ${collapsed ? "items-center" : "items-start"} gap-2 w-full px-3 py-4 text-xs text-zinc-300`}>
            {!collapsed ? (
                <div className="flex items-center gap-2">
                    <span className="truncate overflow-hidden whitespace-nowrap transition-opacity duration-600">
                        {systemStatus === "up" ? "All Systems Operational" : systemStatus === "down" ? "System Down" : "Service Disruptions Reported"}
                    </span>
                    <div className="relative flex items-center justify-center w-4 h-4">
                        <span className={`absolute inline-flex h-full w-full rounded-full ${statusColor} opacity-75 animate-ping`}></span>
                        <span className={`relative inline-flex h-2 w-2 rounded-full ${statusColor}`}></span>
                    </div>
                </div>
            ) : (
                <div className="relative flex items-center justify-center w-4 h-4">
                    <span className={`absolute inline-flex h-full w-full rounded-full ${statusColor} opacity-75 animate-ping`}></span>
                    <span className={`relative inline-flex h-2 w-2 rounded-full ${statusColor}`}></span>
                </div>
            )}
            <span className="text-xs text-zinc-300">v1.0</span>
        </div>
    );
}