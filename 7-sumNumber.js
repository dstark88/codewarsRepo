// Summing a number's digits

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value 
// of each of the number's decimal digits. For example:

// sumDigits(10);  // Returns 1
// sumDigits(99);  // Returns 18
// sumDigits(-32); // Returns 5

// Let's assume that all numbers in the input will be integer values.


var number = 666;

sumDigits(number);

function sumDigits(number) {
    var total = 0;
    var smallNum = 0;
    number = Math.abs(number);

    if (number < 10) {
        console.log(number);
        return;
    }
    
    for (;;) {
        if ( number < 10 ) {
            console.log( number + total);
            return number + total;
        } 
        
            smallNum = number % 10;
            number = Math.floor(number / 10);
    
            total += smallNum;  
    }
}