function randomDay() {
    days = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
    ];
    return days[Math.floor(Math.random() * days.length)];
}

function randomMonth() {
    months = [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december",
    ];
    return months[Math.floor(Math.random() * months.length)];
}

module.exports = [randomDay, randomMonth];
