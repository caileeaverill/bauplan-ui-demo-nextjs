"use client";

import { createContext, useContext, useEffect, useState } from "react";

type User = {
    id: string;
    name: string;
    avatar: string;
};

const UserContext = createContext<User | null>(null);

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const userId = localStorage.getItem("userId");
            if (!userId) return;

            try {
                const response = await fetch(`/api/get-current-user?id=${userId}`);
                const data = await response.json();
                if (data.user) {
                    setUser(data.user);
                }
            } catch (error) {
                console.error("Failed to fetch user", error);
            }
        };

        fetchUser();
    }, []);

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}