'use client'

import { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { LucideInfo } from "lucide-react";
import Link from "next/link";

interface MetricsProps {
    icon?: React.ReactNode;
    label: string;
    value?: string | number;
    subtext?: string;
    className?: string;
    link?: string;
    buttonText?: string;
}

export function Metrics({
    icon = <LucideInfo />,
    label,
    value = 0,
    subtext = '',
    className = 'text-zinc-400 dark:text-white',
    link = '',
    buttonText = ''
}: MetricsProps) {


    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 50);
        return () => clearTimeout(timer);
    }, []);

    const cardContent = (
        <>
            <CardHeader className="space-y-2">
                <div className={`absolute top-4 right-4 ${className}`} aria-hidden="true">
                    {icon}
                </div>
                <h3 className="uppercase text-xs font-normal tracking-wide dark:text-zinc-300">
                    {label}
                </h3>
                <CardTitle className={`text-2xl font-bold transform transition-all duration-600 ${loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    {value ?? 0}
                </CardTitle>
                {subtext && (
                    <CardDescription className="text-xs dark:text-zinc-300">
                        {subtext}
                    </CardDescription>
                )}
                {link && buttonText && (
                    <Link href={link}>
                        <Button className="w-full transition-all duration-300 bg-transparent border border-zinc-300 text-neutral-700 dark:text-zinc-300 hover:cursor-pointer hover:bg-zinc-300 dark:hover:text-slate-800 ">
                            {buttonText}
                        </Button>
                    </Link>
                )}
            </CardHeader>
        </>
    );

    return (
        <Card className="relative transform transition-all duration-300 border shadow-md dark:border-none dark:bg-gradient-to-br from-slate-700 to-slate-800">
            {cardContent}
        </Card>
    );
}

export default Metrics;
