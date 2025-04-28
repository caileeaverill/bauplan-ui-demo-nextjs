'use client'

import { useEffect, useState } from "react";

export function UserName() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <span className="text-sm darktext-zinc-100 font-medium">
            { }
        </span>
    );
}