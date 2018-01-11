'use strict';

var greeting = alert('Hello there!');

var response = prompt('would you like to learn some fun facts about me yes or no?').toUpperCase(); 
 console.log ('the user entered:' + response)
 if (response === 'yes') {
     alert('sweeeeet!');
 } 
 else if (response === 'no') {
     alert ('lets do it anyway!'); 
 }
var userName = prompt ('before we begin may I have your name?')
console.log('the user entered:'+ response)

// Global variable
var qScore = 0;
var qAttempts = 0;
var qValidAns = false;
var qAttempsLimit = 4;

// Question 1
function QuestionOne(){
  do{
    var question1 = prompt('Are you my favorite').toUpperCase(); 
    console.log('The user entered:' + question1);
    if (question1 === 'yes') {
      alert('of course you are!');
      qValidAns = true;
      qScore++;
    }
    else if (question1 === 'no') {
      alert('of course you are!');
      qValidAns = true;
    } else {
      if(qAttempts < 3){
      alert('Please answer yes or no');
      qAttempts++;
      } else {
        alert('was it really that hard? You are out of guesses');
      }
    }
  } while(qValidAns === false && qAttempts < qAttempsLimit);
}
 
QuestionOne();

//var question2 = prompt('Am I the best?').toUpperCase();
//console.log('The user entered:' + question2);
//var response2 = prompt('I thought you might say that!')
//console.log('the user entered:' + response2)

//if (response2 === 'yes') {
  //  alert('I thought you might say that!');
//}
//else if (response2 === 'no') {
  //  alert('I thought you might say that!');
//}

//var question3 = prompt('Do I make you happy?').toUpperCase();
//console.log('The user entered:' + question3);
//var response3 = prompt('I do try ever so hard!')
//console.log('the user entered:' + response3)
//if (response3 === 'yes') {
//    alert('I Know');
//}
//else if (response3 === 'no') {
 //   alert('Did you forget about that time I brought you Starbucks?');
//}

//var question4 = prompt('Am I pretty?').toUpperCase();
//console.log('The user entered:' + question4);
//var response4 = prompt('You are such a kidder')
//console.log('the user entered:' + response4)
//if (response4 === 'yes') {
  //  alert('awwwwwwwwwww');
//}
//else if (response4 === 'no') {
  //  alert('you are such a kidder');
//}

//var theEnd = prompt ('I do love our little chats')
//console.log ('the user entered:' + theEnd);

// Question six
qAttempts = 0;
qValidAns = false;
var favorite80sFLicks = ['real genius', 'war games', 'better off dead', 'the goonies'];
do{
  var flickGuess = promt('Can you guess my fav 80s flick?' + userName).toLowerCase();
  console.log('q six ans' + flickGuess);
  for(var i =0; i < favorite80sFLicks.length; i++){
    if(flickGuess === favorite80sFLicks[0]){
      alert('I\'m impressed!');
      qScore++;
      qValidAns = true;
      break;
    } 
    if(flickGuess === favorite80sFLicks[1]){
      alert('I\'m impressed!');
      qScore++;
      qValidAns = true;
      break;
    }
    if(flickGuess === favorite80sFLicks[2]){
      alert('I\'m impressed!');
      qScore++;
      qValidAns = true;
      break;
    }
    if(flickGuess === favorite80sFLicks[3]){
      alert('I\'m impressed!');
      qScore++;
      qValidAns = true;
      break;
    }
    if(flickGuess === favorite80sFLicks[4]){
      alert('I\'m impressed!');
      qScore++;
      qValidAns = true;
      break;
    } else {
      if(qAttempts < 3){
        alert('Nope. I\'ll give you a hint. Do you want to play a game');
        qAttempts++;
        } else {
          alert('was it really that hard? You are out of guesses');
        }
      }
    }
} while (qValidAns === false && qAttempts < qAttempsLimit);