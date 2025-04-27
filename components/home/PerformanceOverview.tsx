"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { month: "January", apiCalls: 1200, pipelineExecutions: 300 },
    { month: "February", apiCalls: 1500, pipelineExecutions: 340 },
    { month: "March", apiCalls: 1700, pipelineExecutions: 380 },
    { month: "April", apiCalls: 1400, pipelineExecutions: 310 },
    { month: "May", apiCalls: 1800, pipelineExecutions: 400 },
    { month: "June", apiCalls: 2000, pipelineExecutions: 450 },
]

const chartConfig = {
    apiCalls: {
        label: "API Calls",
        color: "hsl(var(--chart-1))",
    },
    pipelineExecutions: {
        label: "Pipeline Executions",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export default function PerformanceOverview() {
    return (
        <Card className="bg-transparent text-white border-none shadow-none [&>*]:p-0 ]">
            <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription className="text-zinc-300">API Calls and Pipeline Executions - Jan to Jun 2024</CardDescription>
            </CardHeader >
            <CardContent >
                <ChartContainer className="max-h-[350px] w-full" config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} stroke="rgba(255, 255, 255, 0.1)" />
                        <XAxis
                            padding={{ left: 10, right: 10 }}
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tick={{ fill: "#e5e7eb", fontSize: 12 }}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Line
                            dataKey="apiCalls"
                            type="monotone"
                            stroke="#60A5FA"
                            strokeWidth={2}
                            dot={false}
                        />
                        <Line
                            dataKey="pipelineExecutions"
                            type="monotone"
                            stroke="#A78BFA"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-zinc-300">
                            Showing API Calls and Pipeline Executions for the last 6 months
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card >
    )
}
