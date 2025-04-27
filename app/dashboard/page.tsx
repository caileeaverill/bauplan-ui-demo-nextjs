import DashboardMetrics from "./DashboardMetrics";


function page() {

    return (
        <div className='text-black dark:text-white grid grid-cols-3 gap-8'>
            <div className="col-span-3">
                <h1 className='text-4xl font-bold mb-2'>Dashboard</h1>
                <p className="text-slate-600 dark:text-slate-400">Monitor your pipelines, deployments, and system health</p>
            </div>
            <DashboardMetrics />
        </div>
    );
}

export default page;