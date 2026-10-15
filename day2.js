// 1 even and odd number
let number = 7;

if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}
// 2. GRADE CALCULATOR
let score = 75;

if (score < 0 || score > 100) {
    console.log("Invalid score");
} else if (score >= 80) {
    console.log("A");
} else if (score >= 70) {
    console.log("B");
} else if (score >= 60) {
    console.log("C");
} else if (score >= 50) {
    console.log("D");
} else {
    console.log("F");
}

// 3. TICKET PRICE
let age = 20;
let isStudent = true;
let ticketPrice;

if (age > 65) {
    ticketPrice = 0;
} else if (age < 12) {
    ticketPrice = 2000;
} else if (isStudent) {
    ticketPrice = 3000;
} else {
    ticketPrice = 5000;
}

console.log("Ticket price:", ticketPrice, "RWF");

// 4. DAY PLANNER
let day = "Monday";
switch (day.toLowerCase()) {
    case "monday":
        console.log("Monday: Programming class");
        break;
    case "tuesday":
        console.log("Tuesday: Computer Networks");
        break;
    case "wednesday":
        console.log("Wednesday: Database class");
        break;
    case "thursday":
        console.log("Thursday: Cybersecurity class");
        break;
    case "friday":
        console.log("Friday: Practical exercises");
        break;
    case "saturday":
    case "sunday":
        console.log("No class");
        break;
    default:
        console.log("Invalid day");
}

// 5. COUNTDOWN
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//6. SUM AND AVERAGE USING FOR...OF
const numbers = [45, 78, 90, 62, 88];
let sum = 0;

for (const value of numbers) {
    sum += value;
}

const average = sum / numbers.length;

console.log("Sum:", sum);
console.log("Average:", average);

// 7. FIND THE FIRST NUMBER GREATER THAN 100
const values = [20, 45, 101, 150, 200];

for (const value of values) {
    if (value > 100) {
        console.log("First number greater than 100:", value);
        break;
    }
}
// 8. SKIP NEGATIVES USING CONTINUE
const mixedNumbers = [-5, 10, -3, 20, 0, 15];

for (const value of mixedNumbers) {
    if (value < 0) {
        continue;
    }

    console.log(value);
}

