'use client'
import { useUser } from "@/context/UserContext";
import DemoSettingsSheet from "../DemoSettingsSheet";
import { useEffect, useState } from "react";
import { setDarkMode, setLightMode } from "@/lib/theme";
import { Sun, Moon } from "lucide-react";
import { UserAvatar } from "./UserAvatar";
import { UserName } from "./UserName";


export default function TopNav() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const user = useUser();

    useEffect(() => {
        setIsDarkMode(document.documentElement.classList.contains('dark'));
    }, []);

    function toggleTheme() {
        if (document.documentElement.classList.contains('dark')) {
            setLightMode();
            setIsDarkMode(false);
        } else {
            setDarkMode();
            setIsDarkMode(true);
        }
    }

    return (
        <header className="w-full h-16 border-b border-slate-300 dark:border-slate-800 flex items-center justify-between px-8" aria-label="Top Navigation">
            {/* Left Section */}
            <div className="flex items-center gap-4">
                <DemoSettingsSheet />
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
                {user && (
                    <div className="flex items-center gap-2">
                        <UserName name={user.name} />
                        <UserAvatar src={user.avatar} />
                    </div>
                )}
                <button
                    onClick={toggleTheme}
                    className="dark:text-black hover:text-primary transition relative w-6 h-6"
                    aria-label="Toggle Theme"
                >
                    <Sun
                        className={`absolute top-0 left-0 w-5 h-5 transition-all duration-300 hover:cursor-pointer ${isDarkMode ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                    />
                    <Moon
                        className={`absolute top-0 left-0 w-5 h-5 transition-all duration-300 hover:cursor-pointer ${!isDarkMode ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                    />
                </button>
            </div>
        </header>
    );
}