/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)


// 2. What is the cost per square inch of each pizza?

let thirteenInPizzaPrice = 16.99;
let seventeenInPizzaPrice = 19.99;

let thirteenInPizzaArea = Math.PI * ((13 / 2)**2);
let seventeenInPizzaArea = Math.PI * ((17 / 2)**2);

let thirteenInPizzaCostPerInch = thirteenInPizzaPrice / thirteenInPizzaArea;
let seventeenInPizzaCostPerInch = seventeenInPizzaPrice / seventeenInPizzaArea;

console.log(thirteenInPizzaArea);
console.log(seventeenInPizzaArea);
    
console.log(thirteenInPizzaCostPerInch);
console.log(seventeenInPizzaCostPerInch);
   
// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

console.log(Math.floor(Math.random() * 13) + 1);

// 4. Draw 3 cards and use Math to determine the highest
// card

console.log(Math.max(Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1));

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

let firstName = 'Ryan';
let lastName = 'Ku';
let streetAddress = '1234 16th ave ne';
let city = 'Seattle';
let state = 'Washington';
let zipcode = '12345';

let fullAddress =
`${firstName} ${lastName}
${streetAddress}
${city}, ${state}, ${zipcode}`;

console.log(fullAddress);

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

let firstName = 'Ryan';
let lastName = 'Ku';
let streetAddress = '1234 16th ave ne';
let city = 'Seattle';
let state = 'Washington';
let zipcode = '12345';

let fullAddress =
    `${firstName} ${lastName}
${streetAddress}
${city}, ${state}, ${zipcode}`;

let extractIndexFirstName = fullAddress.indexOf(" ");
let extractIndexSecondName = fullAddress.indexOf("/n", extractIndexFirstName);

let extractFirstName = fullAddress.substring(extractIndexFirstName, extractIndexSecondName);
let extractSecondName = fullAddress.substring(extractIndexFirstName + 1, 8);

console.log(extractFirstName);
console.log(extractSecondName);

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const startDate = new Date(2020, 0, 1);
const endDate = new Date(2020, 3, 1);

let midDate = new Date((startDate.getTime() + endDate.getTime()) / 2);

console.log(midDate);
