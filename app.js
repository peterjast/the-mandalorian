'use strict'

function getUserName(){
    let message;
    let userName = prompt('Please Enter Your Name: ');
    if (userName != false && userName != null) {
        message = 'Welcome ' + userName + '!'; 
    } else {
        message = 'Welcome!!!';
    }
    document.write(message);   
}        

let byeMessage;

function getTimeOfDay() {
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
    byeMessage = ('Have a wonderful ' + timeOfDay + '!');
}

function reveal() { 
    let message;
    let revealName = confirm('Are you sure you want to know?');
    if (revealName === true) {
        message = '<h2>Din Djarin!</h2><br><img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/12/The-Mandalorian-Din-Djarin-Pedro-Pascal.jpg">'
    } else {
        message = 'No worries! Come back if you change your mind.'};
    getTimeOfDay();    
    document.getElementById("realName").innerHTML = message; 
    document.getElementById("bye").innerHTML = byeMessage;   
} 