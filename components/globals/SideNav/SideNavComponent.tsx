'use client'

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LucideBarChart3, LucideWrench, LucideClipboardEdit, LucideLayers, LucidePlug, LucideKeyRound, LucideCreditCard, LucideMessageCircleQuestion, LucideCog, LucideBookOpenText, ListChecks, ShieldCheck, Users, ChevronLeft, ChevronRight, Home } from "lucide-react";
import SideNavLink from "./SideNavLink";
import SidebarFooter from "./SideNavFooter";


export default function SideNav() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside className={`h-screen ${collapsed ? "w-28" : "w-64"} border-r border-slate-800 flex flex-col justify-between p-8 transition-all duration-700 bg-gradient-to-br from-zinc-900 to-slate-800`}>
            {/* Top - Logo */}
            <div>
                <div className="relative mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <a
                            href="https://www.bauplanlabs.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 group"
                        >
                            <Image
                                src="/bauplan-logo.svg"
                                alt="logo"
                                width={32}
                                height={32}
                                className="transition-transform duration-700 group-hover:rotate-[360deg]"
                            />
                            <span className={`text-white transition-opacity duration-600 ${collapsed ? "opacity-0" : "opacity-100"}`}>
                                bauplan
                            </span>
                        </a>
                    </div>

                    <Button
                        variant="link"
                        size="icon"
                        onClick={() => setCollapsed(!collapsed)}
                        className="absolute -right-6 text-muted-foreground hover:text-foreground hover:cursor-pointer"
                    >
                        <span className="text-zinc-300">
                            {collapsed ? <ChevronRight /> : <ChevronLeft />}
                        </span>
                    </Button>
                </div>

                {/* Main Links */}
                <nav className="flex flex-col gap-2">
                    <SideNavLink to="/" icon={<Home />} label="Home" collapsed={collapsed} />
                    <SideNavLink to="/dashboard" icon={<LucideBarChart3 />} label="Dashboard" collapsed={collapsed} />
                    <SideNavLink to="/pipelines" icon={<LucideWrench />} label="Pipelines" collapsed={collapsed} />
                    <SideNavLink to="/jobs" icon={<LucideClipboardEdit />} label="Jobs" collapsed={collapsed} />
                    <SideNavLink to="/data-products" icon={<LucideLayers />} label="Data Products" collapsed={collapsed} />

                    {/* Divider */}
                    <Separator className="my-4 bg-slate-800" />

                    {/* Connections Links */}
                    <SideNavLink to="/integrations" icon={<LucidePlug />} label="Integrations" collapsed={collapsed} />
                    <SideNavLink to="/api-key" icon={<LucideKeyRound />} label="API Keys" collapsed={collapsed} />

                    {/* Account Links */}
                    <SideNavLink to="/billing" icon={<LucideCreditCard />} label="Billing" collapsed={collapsed} />
                    <SideNavLink to="/support" icon={<LucideMessageCircleQuestion />} label="Support" collapsed={collapsed} />
                    <SideNavLink to="/management" icon={<Users />} label="Team Management" collapsed={collapsed} />
                    <SideNavLink to="/settings" icon={<LucideCog />} label="Workspace Settings" collapsed={collapsed} />

                    {/* Resources Links */}
                    <SideNavLink to="/docs" icon={<LucideBookOpenText />} label="Documentation" collapsed={collapsed} />
                    <SideNavLink to="/activity" icon={<ListChecks />} label="Activity Log" collapsed={collapsed} />
                    <SideNavLink to="/audit-log" icon={<ShieldCheck />} label="Audit Log" collapsed={collapsed} />
                </nav>
            </div>

            {/* Bottom - Profile / Logout */}
            <SidebarFooter collapsed={collapsed} />
        </aside >
    );
}
