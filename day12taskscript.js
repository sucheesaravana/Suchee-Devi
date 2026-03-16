const num1 = 25;
const num2 = 4;
let remainder = num1 % num2;
console.log("1. Remainder:", remainder);
let counter = 10;
counter += 5;
console.log("2. Counter value:", counter);
console.log("3. Strict Equality (5 === '5'):", 5 === "5");
const isWeekend = false;
const isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("4. Time to relax!");
}
const trafficLight = "red";

if (trafficLight === "red") {
    console.log("5. Stop!");
} else {
    console.log("5. Go!");
}
if (trafficLight === "red") {
    console.log("6. Stop!");
} else if (trafficLight === "yellow") {
    console.log("6. Slow Down.");
} else {
    console.log("6. Go!");
}
const isRaining = true;
const hasUmbrella = false;

if (isRaining && !hasUmbrella) {
    console.log("7. Stay inside.");
}
const productCode = "PRO";

switch (productCode) {
    case "PRO":
        console.log("8. Processor");
        break;

    case "RAM":
        console.log("8. Memory");
        break;

    default:
        console.log("8. Unknown Device");
}
const studentScore = 75;

if (studentScore >= 70) {
    console.log("9. Passed");
}
const hasError = false;

if (!hasError) {
    console.log("10. System Clear");
}