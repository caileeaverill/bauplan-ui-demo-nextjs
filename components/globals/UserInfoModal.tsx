"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

function UserInfoModal() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [userId, setUserId] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [step, setStep] = useState(1);
    const [avatar, setAvatar] = useState("");

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
        if (!name.trim() || !avatar.trim()) return;

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/save-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, avatar }),
            });

            const data = await response.json();

            if (data.userId) {
                localStorage.setItem("userId", data.userId);
                setUserId(data.userId);
                setOpen(false);
                window.location.reload();
            } else {
                console.error("Failed to save user:", data);
            }
        } catch (error) {
            console.error("Error saving user:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={open}>
            <DialogContent className="max-w-sm">
                <DialogHeader>
                    {step === 1 && (
                        <>
                            <DialogTitle>Welcome! What's your name?</DialogTitle>
                            <div className="flex flex-col gap-4 mt-4">
                                <Input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                />
                                <Button
                                    onClick={() => setStep(2)}
                                    disabled={!name.trim()}
                                    className="w-full"
                                >
                                    Next
                                </Button>
                            </div>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <DialogTitle>Choose an avatar</DialogTitle>
                            <div className="flex justify-center gap-4 mt-4">
                                {["/avatars/cry-cat.jpg", "/avatars/rat.jpg", "/avatars/shiba.jpg"].map((src) => (
                                    <button
                                        key={src}
                                        type="button"
                                        onClick={() => setAvatar(src)}
                                        className={`rounded-full p-1 hover:ring-2 transition-all duration-300 hover:cursor-pointer hover:ring-slate-400 ${avatar === src ? "ring-2 ring-slate-400" : ""}`}
                                    >
                                        <Avatar className="w-16 h-16">
                                            <AvatarImage src={src} />
                                            <AvatarFallback>AV</AvatarFallback>
                                        </Avatar>
                                    </button>
                                ))}
                            </div>
                            <Button
                                onClick={handleSubmit}
                                disabled={!avatar.trim() || isSubmitting}
                                className="w-full mt-6 hover:cursor-pointer"
                            >
                                {isSubmitting ? "Saving..." : "Submit"}
                            </Button>
                        </>
                    )}
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default UserInfoModal;