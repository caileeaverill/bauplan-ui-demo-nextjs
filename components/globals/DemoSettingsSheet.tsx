'use client'

import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { useAppSettings } from "@/context/AppSettingsContext";
import { useState } from "react";
import { Settings } from "lucide-react";


function DemoSettingsSheet() {

    const { loadingTime, setLoadingTime, systemStatus, setSystemStatus } = useAppSettings();
    const [inputValue, setInputValue] = useState(loadingTime.toString());

    return (
        <><Sheet>
            <SheetTrigger asChild>
                <button className="flex items-center justify-center p-2 rounded-md  transition hover:cursor-pointer hover:bg-zinc-800">
                    <Settings className="w-5 h-5 text-white" />
                </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-gradient-to-br from-zinc-900 to-slate-800 border-l-slate-800">
                <SheetHeader className="px-8 [&>*]:text-white">
                    <SheetTitle className="text-3xl font-bold mb-2">App Settings</SheetTitle>
                    <p className="text-sm">These settings are to demonstrate functionality and features of the app and are saved into local storage</p>
                </SheetHeader>
                <div className="flex flex-col gap-4 px-8 [&>*]:text-white">
                    <label className="text-sm font-medium">
                        Set Loading Time (ms)
                    </label>
                    <Input
                        type="number"
                        step={500}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter loading time in milliseconds"
                    />
                    <label className="text-sm font-medium">
                        Set System Status
                    </label>
                    <select
                        value={systemStatus}
                        onChange={(e) => setSystemStatus(e.target.value as "up" | "down" | "disruptions")}
                        className="bg-zinc-800 text-white rounded-md p-2"
                    >
                        <option value="up">Up</option>
                        <option value="down">Down</option>
                        <option value="disruptions">Issues Reported</option>
                    </select>
                    <button
                        onClick={() => {
                            const newTime = parseInt(inputValue, 10);
                            if (!isNaN(newTime)) {
                                setLoadingTime(newTime);
                            }
                        }}
                        className="mt-2 px-4 py-2 bg-blue-900 hover:bg-blue-800 rounded-md text-white transition"
                    >
                        Save
                    </button>
                </div>
            </SheetContent>
        </Sheet></>
    )
}

export default DemoSettingsSheet