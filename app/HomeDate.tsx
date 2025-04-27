
function HomeDate() {
    const today = new Date();
    const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
    const monthName = today.toLocaleDateString('en-US', { month: 'long' });
    const dayNumber = today.getDate();
    const year = today.getFullYear();
    return (
        <div className="p-4 inline-flex flex-col items-center">
            <div className="self-end text-right text-zinc-300 font-light">
                <p>{dayName}</p>
                <p>{monthName} {dayNumber}, {year}</p></div>
        </div>
    )
}

export default HomeDate