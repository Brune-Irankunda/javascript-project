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
