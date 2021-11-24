// Code your solution in this file!
//returnFirstTwoDrivers() — Declare the variable returnFirstTwoDrivers with const and assign an anonymous function to it.
//The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.
//returnLastTwoDrivers() — Declare a variable with const that is assigned an anonymous function.
//The assigned function should accept an array of drivers as an argument and return the last two drivers in the array.
//selectingDrivers — This is an array containing two elements: the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).
//createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly.
//If createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.
//fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it.
//Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.
//fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it.
//Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.
//selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function.
//Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.

const drivers = ["Sally", "Bob", "driver3", "Freddy", "Claudia"];

const returnFirstTwoDrivers = function() {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function() {
    return drivers.slice(3);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer) {
    return function(fare) {
        return integer * fare
    }
}

function fareDoubler(fare) {
    return fare * 2
}

function fareTripler(fare) {
    return fare * 3
}

function selectDifferentDrivers(drivers, second) {
if (second === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers();
}
else if (second === returnLastTwoDrivers) {
    return returnLastTwoDrivers();}
}