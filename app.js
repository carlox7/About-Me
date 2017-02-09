'use strict';

// This is a comment line in JS
/* This is a comment block in JS */
var userName = prompt('Hello stranger, what is your name?');
alert('Hello ' + userName + ' nice to meet you!');
var response1 = confirm ('Welcome to Carlo\'s webpage ' + userName + '.' + ' Would you like to take a quiz?');

if(response1){
  alert ('Awesome! Let\'s get started!');
} else {
  alert ('I think I heard yes, lets get started!');
}

var quizResponse1 = prompt('Please Answer with Y or N. Did Carlo go to Super Bowl 48?');

if(quizResponse1.toUpperCase() === 'Y'){
  alert('Correct! He was there to see the Seahawks win their first Super Bowl title ever!');
}else {
  alert('Wrong, he actually did go. Please make a note of it.');
}

var quizResponse2 = prompt('Is Carlo a former Olympic swimmer?');

if(quizResponse2.toUpperCase() === 'Y'){
  alert('lol no, Carlo barely even knows how to swim');
}else {
  alert('Correct! He once got 4th place in a 3 man race.');
}

var quizResponse3 = prompt('Did Carlo once drive from Seattle to New York?');

if(quizResponse3.toUpperCase() === 'Y'){
  alert('Correct! Carlo drove from Seattle to Syracuse and got a speeding ticket in Illinois');
}else{
  alert('Wrong! He drove all the way there and took showers at truck stop gas stations.');
}

var quizResponse4 = prompt('Is Carlo a sushi expert?');

if(quizResponse4.toUpperCase() === 'Y'){
  alert('Correct! Carlo has worked for almost ten years with sushi restaurants. He better know his stuff.');

}else{
  alert('Actually he is! better luck next time ' + userName + '.');
}
