import DashboardMetrics from "./DashboardMetrics";


function page() {

    return (
        <div className='text-white grid grid-cols-3 gap-8'>
            <div className="col-span-3">
                <h1 className='text-4xl font-bold mb-2'>Dashboard</h1>
                <p>Monitor your pipelines, deployments, and system health</p>
            </div>
            <DashboardMetrics />
        </div>
    );
}

export default page;