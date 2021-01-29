'use strict'

function getUserName(){
    let userName = prompt('Please Enter Your Name: ');
    while(userName == false || userName == null){
        alert('A name is required to enter this page');        
        userName = prompt('Please Enter Your Name: ');
    } 
    document.write('Welcome ' + userName + '!');   
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

function imagesOnScreen() {
    let userAnswer = prompt('How many Mando helmets do you want? (1 to 5)');
    while(userAnswer < 1 || userAnswer > 5){
        alert('invalid number!')
        userAnswer = prompt('How many Mando helmets do you want? (1 to 5)');
    }
    for (let i = 0; i < userAnswer; i++){
        document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQWnhnGUuvL36fD8T3e0_lRLP7a1KFYKnI6qs7_F54aO4Xc1dudcQgvxezPmDXi0rM1rkv0HM&usqp=CAc">')
    }
}

