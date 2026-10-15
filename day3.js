// 1. square(n) — ARROW FUNCTION

const square = (n) => n * n;

console.log("1. Square:");
console.log(square(4));  
console.log(square(7));   
console.log(square(0));   

// 2. isEven(n) — RETURNS A BOOLEAN

function isEven(n) {
    return n % 2 === 0;
}

console.log("\n2. Is Even:");
console.log(isEven(8)); 
console.log(isEven(5));   
console.log(isEven(0)); 

// 3. CELSIUS AND FAHRENHEIT CONVERTERS

function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
}

console.log("\n3. Temperature Conversion:");
console.log(celsiusToFahrenheit(0));    
console.log(celsiusToFahrenheit(100));  
console.log(celsiusToFahrenheit(-40));  

console.log(fahrenheitToCelsius(32));   
console.log(fahrenheitToCelsius(212));  
console.log(fahrenheitToCelsius(-40));  

// 4. formatPrice(amount, currency = "RWF")
function formatPrice(amount, currency = "RWF") {
    return amount.toLocaleString("en-RW", {
        style: "currency",
        currency: currency
    });
}

console.log("\n4. Format Price:");
console.log(formatPrice(5000));         
console.log(formatPrice(1234567.5));     
console.log(formatPrice(0, "USD"));

// 5. getGrade(score) — GUARD CLAUSE
function getGrade(score) {
    if (typeof score !== "number" ||
        !Number.isFinite(score) ||
        score < 0 ||
        score > 100) {
        return "Invalid score";
    }

    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";

    return "F";
}

console.log("\n5. Get Grade:");
console.log(getGrade(95));    
console.log(getGrade(65));  
console.log(getGrade(101)); 
