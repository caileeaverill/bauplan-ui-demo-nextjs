'use client'

import { useEffect, useState } from "react";
import { fakeUser } from "@/lib/fakeUser";

export function UserAvatar() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <img
            src={fakeUser.avatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover hover:ring-2 hover:ring-primary hover:ring-offset-2 transition hover:cursor-pointer"
        />
    );
}