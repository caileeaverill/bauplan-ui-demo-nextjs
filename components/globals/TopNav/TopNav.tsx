import { fakeUser } from "@/lib/fakeUser";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import DemoSettingsSheet from "../DemoSettingsSheet";


export default function TopNav() {

    return (
        <header className="w-full h-16 border-b border-slate-800 flex items-center justify-between px-8" aria-label="Top Navigation">
            {/* Left Section */}
            <div className="flex items-center gap-4">
                <DemoSettingsSheet />
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
                <span className="text-sm text-zinc-100 font-medium">{fakeUser.firstName} {fakeUser.lastName}</span>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <img
                            src={fakeUser.avatar}
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full object-cover hover:ring-2 hover:ring-primary hover:ring-offset-2 transition hover:cursor-pointer"
                        />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}