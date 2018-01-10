'use strict';
 var greeting = prompt ('Hello again, I really missed you')
console.log('The user entered:' + greeting);
var response = prompt('wanna hang out and play a quick trivia game? yes or no?').toUpperCase(); 
 console.log ('the user entered:' + response)
 if (response === 'yes') {
     alert('sweeeeet!');
 } 
 else if (response === 'no') {
     alert ('lets do it anyway!'); 
 }

var question1 = prompt('Are you my favorite?').toUpperCase(); 
console.log('The user entered:' + question1);
var response1 = prompt('of course you are!')
console.log('the user entered:' + response1)
if (response1 === 'yes') {
alert('of course you are!');
}
else if (response1 === 'no') {
alert('of course you are!');
}
 
var question2 = prompt('Am I the best?').toUpperCase();
console.log('The user entered:' + question2);
var response2 = prompt('I thought you might say that!')
console.log('the user entered:' + response2)

if (response2 === 'yes') {
    alert('I thought you might say that!');
}
else if (response2 === 'no') {
    alert('I thought you might say that!');
}

var question3 = prompt('Do I make you happy?').toUpperCase();
console.log('The user entered:' + question3);
var response3 = prompt('I do try ever so hard!')
console.log('the user entered:' + response3)
if (response3 === 'yes') {
    alert('I Know');
}
else if (response3 === 'no') {
    alert('Did you forget about that time I brought you Starbucks?');
}

var question4 = prompt('Am I pretty?').toUpperCase();
console.log('The user entered:' + question4);
var response4 = prompt('You are such a kidder')
console.log('the user entered:' + response4)
if (response4 === 'yes') {
    alert('awwwwwwwwwww');
}
else if (response4 === 'no') {
    alert('you are such a kidder');
}

var theEnd = prompt ('I do love our little chats')
console.log ('the user entered:' + theEnd);