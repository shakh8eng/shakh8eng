function calculateLessonPrice(hours, ratePerHour) {
    return hours * ratePerHour;
}

function calculate() {
    let hours = document.getElementById("hours").value;
    let rate = document.getElementById("rate").value;

    let price = calculateLessonPrice(hours, rate);

    document.getElementById("result").innerText =
        "Total price: " + price;
}