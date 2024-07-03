document.addEventListener("DOMContentLoaded", function() {
    // Display the current time in UTC
    const currentTimeElement = document.getElementById('currentTime');
    const currentDayElement = document.getElementById('currentDay');

    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().slice(17, 25); // Extracts the time part in UTC
        const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' }); // Gets the day of the week

        currentTimeElement.textContent = utcTime;
        currentDayElement.textContent = dayOfWeek;
    }

    // Update time immediately and then every second
    updateTime();
    setInterval(updateTime, 1000);
});
