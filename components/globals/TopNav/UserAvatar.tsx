'use client'

import { useEffect, useState } from "react";

type UserAvatarProps = {
    src?: string;
};

export function UserAvatar({ src }: UserAvatarProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !src) {
        return null;
    }

    return (
        <img
            src={src}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover hover:ring-2 hover:ring-primary hover:ring-offset-2 transition hover:cursor-pointer"
        />
    );
}