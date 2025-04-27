function HomeDate() {
    const today = new Date();
    const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
    const monthName = today.toLocaleDateString('en-US', { month: 'long' });
    const dayNumber = today.getDate();
    const year = today.getFullYear();
    return (
        <section className="p-4 inline-flex flex-col items-center text-black dark:text-white" aria-label="Today's Date">
            <div className="self-end text-right font-light">
                <p>{dayName}</p>
                <time dateTime={`${year}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(dayNumber).padStart(2, "0")}`}>
                    {monthName} {dayNumber}, {year}
                </time>
            </div>
        </section>
    )
}

export default HomeDate