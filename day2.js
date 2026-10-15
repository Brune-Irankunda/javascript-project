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
