import {
    LucideWrench,
    LucideRocket,
    AlertTriangle,
    Wallet,
} from "lucide-react";

import { Metrics } from "@/components/common/Metrics";

function HomeMetrics() {

    // mock data

    const randomNum = () => Math.floor(Math.random() * 1000);

    const metricsData = {
        deployments: randomNum(),
        deploymentsChange: randomNum(),
        pipelines: randomNum(),
        pipelinesChange: randomNum(),
        credits: randomNum(),
        creditsRemaining: randomNum(),
    };

    return (
        <section className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1" aria-label="System Metrics">
            <Metrics
                icon={<LucideRocket />}
                label="Deployments"
                value={`${metricsData.deployments}`}
                subtext={`+${metricsData.deploymentsChange} vs yesterday`}
                className="text-blue-500"
            />
            <Metrics
                icon={<LucideWrench />}
                label="Pipelines"
                value={`${metricsData.pipelines}`}
                subtext={`+${metricsData.pipelinesChange} this week`}
                className="text-red-500"
            />
            <Metrics
                icon={<AlertTriangle />}
                label="Errors"
                value="0"
                subtext="All systems normal"
                className="text-yellow-500"
            />
            <Metrics
                icon={<Wallet />}
                label="Credits Remaining"
                value={`${metricsData.credits} left`}
                subtext={`${metricsData.creditsRemaining} remaining`}
                className="text-green-500"
            />
        </section>
    )
}

export default HomeMetrics