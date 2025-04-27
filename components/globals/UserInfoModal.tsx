"use client";

import { useEffect, useState } from "react";

function UserInfoModal() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [userId, setUserId] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedUserId = localStorage.getItem("userId");

            if (!savedUserId) {
                // No user ID found, show modal
                setOpen(true);
            } else {
                // User ID found, save it
                setUserId(savedUserId);
            }
        }
    }, []);

    const handleSubmit = async () => {
        if (!name.trim()) return;

        setIsSubmitting(true);

        try {
            // Here you would send a POST request to your FastAPI backend
            // For now, we'll simulate getting a userId back
            const fakeUserId = "12345"; // Replace this later with real API response

            localStorage.setItem("userId", fakeUserId);
            setUserId(fakeUserId);
            setOpen(false);
        } catch (error) {
            console.error("Failed to save user:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                    <div className="bg-white p-6 rounded shadow-md">
                        <h2 className="text-xl mb-4">Welcome! What's your name?</h2>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="border p-2 w-full mb-4"
                        />
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                        >
                            {isSubmitting ? "Saving..." : "Submit"}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default UserInfoModal;