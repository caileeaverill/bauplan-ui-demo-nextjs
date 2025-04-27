import Metrics from "@/components/common/Metrics";

const randomNum = () => Math.floor(Math.random() * 1000);

function DashboardMetrics() {

    const metricsData = {
        totalDeployments: randomNum(),
        totalDeploymentsChange: randomNum(),
        activePipelines: randomNum(),
        activePipelinesChange: randomNum(),
        successRate: randomNum() + "%",
        deploymentsFrequency: randomNum() + " per day",
        uptime: "99.98%",
        totalPipelinesExecuted: randomNum(),
        failedPipelines: randomNum(),
        avgPipelineExecutionTime: randomNum() + " mins",
        queuedPipelines: randomNum(),
        totalAPIRequests: randomNum(),
        activeUsers: randomNum(),
        dataProcessed: randomNum() + " GB",
        pendingApprovals: randomNum()
    };

    return (
        <div className="col-span-3 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <Metrics
                icon={undefined}
                label="Total Pipelines Executed"
                value={`${metricsData.totalPipelinesExecuted}`}
                subtext="Total runs since inception"
                link="/pipelines/executed"
                buttonText="View pipelines"
            />
            <Metrics
                icon={undefined}
                label="Average Pipeline Execution Time"
                value={metricsData.avgPipelineExecutionTime}
                subtext="Time per execution"
                link="/pipelines/avg-time"
                buttonText="View average times"
            />

            {/* Deployment Metrics */}
            <Metrics
                icon={undefined}
                label="Total Deployments"
                value={`${metricsData.totalDeployments}`}
                subtext={`+${metricsData.totalDeploymentsChange} vs yesterday`}
                link="/deploys"
                buttonText="View deployments"
            />
            <Metrics
                icon={undefined}
                label="Deployment Frequency"
                value={metricsData.deploymentsFrequency}
                subtext="Deployments per day"
                link="/deployments/frequency"
                buttonText="View frequencies"
            />

            {/* System Metrics */}
            <Metrics
                icon={undefined}
                label="System Uptime"
                value={metricsData.uptime}
                subtext="Platform stability"
                link="/system/uptime"
                buttonText="View uptime"
            />
            <Metrics
                icon={undefined}
                label="Data Processed"
                value={metricsData.dataProcessed}
                subtext="Total processed data this week"
                link="/data/processed"
                buttonText="View processed data"
            />
        </div>
    )
}

export default DashboardMetrics