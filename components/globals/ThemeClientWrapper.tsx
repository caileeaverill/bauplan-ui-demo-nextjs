'use client'

import { useEffect } from "react";
import { loadTheme } from "@/lib/theme"; // your existing theme functions

export function ThemeClientWrapper({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        loadTheme();
    }, []);

    return <>{children}</>;
}