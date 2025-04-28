'use client'

import { useEffect, useState } from "react";

type UserNameProps = {
    name: string;
};

export function UserName({ name }: UserNameProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <span className="text-sm text-zinc-900 dark:text-zinc-100 font-medium">
            {name}
        </span>
    );
}