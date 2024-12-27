export const getWeekDays = () => {
    const today = new Date();
    const startOfWeek = new Date(today);

    // Subtract current day to get the starting Sunday
    startOfWeek.setDate(today.getDate() - today.getDay());

    const days = [];
    for (let i = 0; i < 7; i++) {
        const currentDay = new Date(startOfWeek);
        currentDay.setDate(startOfWeek.getDate() + i);

        days.push({
        number: currentDay.getDate(),
        day: currentDay.toLocaleString('default', { weekday: 'short' }),
        isActive: currentDay.toDateString() === today.toDateString(),
        });
    }
    return days;
}