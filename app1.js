'use strict'

let today = new Date();
let hourNow = today.getHours();
let timeOfDay;

if (hourNow >= 18) {
    timeOfDay = 'evening';
} else if (hourNow >= 12) {
    timeOfDay = 'afternoon';
} else if (hourNow >= 0) {
    timeOfDay = 'morning';
} else {
    timeOfDay = 'day';
}
document.write('Have a wonderful ' + timeOfDay + '!');