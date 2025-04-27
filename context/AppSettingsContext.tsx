'use client'

type SystemStatus = "up" | "down" | "disruptions";

import { createContext, useContext, useState, ReactNode } from "react";

interface AppSettingsContextType {
    loadingTime: number;
    setLoadingTime: (ms: number) => void;
    systemStatus: SystemStatus;
    setSystemStatus: (status: SystemStatus) => void;
}

const AppSettingsContext = createContext<AppSettingsContextType | undefined>(undefined);


export function AppSettingsProvider({ children }: { children: ReactNode }) {
    const [loadingTime, setLoadingTimeState] = useState(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("loadingTime");
            return saved ? parseInt(saved, 10) : 1500;
        }
        return 1500;
    });

    const [systemStatus, setSystemStatusState] = useState<SystemStatus>(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("systemStatus");
            return (saved as SystemStatus) || "up";
        }
        return "up";
    });

    const setLoadingTime = (ms: number) => {
        if (ms === 0) {
            setLoadingTimeState(0);
            localStorage.removeItem("loadingTime");
        } else {
            setLoadingTimeState(ms);
            localStorage.setItem("loadingTime", ms.toString());
        }
    };

    const setSystemStatus = (status: SystemStatus) => {
        setSystemStatusState(status);
        localStorage.setItem("systemStatus", status);
    };

    return (
        <AppSettingsContext.Provider value={{ loadingTime, setLoadingTime, systemStatus, setSystemStatus }}>
            {children}
        </AppSettingsContext.Provider>
    );
}

export function useAppSettings() {
    const context = useContext(AppSettingsContext);
    if (!context) {
        throw new Error("useAppSettings must be used inside AppSettingsProvider");
    }
    return context;
}