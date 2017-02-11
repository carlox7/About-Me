'use strict';

//variable for logging user right answers
var rightAnswers = 0;
// stores user's name //
var userName = prompt('Hello stranger, what is your name?');
alert('Hello ' + userName + ' nice to meet you!');
var response1 = confirm ('Welcome to Carlo\'s webpage ' + userName + '.' + ' Would you like to take a quiz?');
//responds to user input //
if(response1){
  alert ('Awesome! Let\'s get started!');
} else {
  alert ('I think I heard yes, lets get started!');
}

function questionOne(){
  //yes or no question//
  var quizResponse1 = prompt('Please Answer with Y or N. Did Carlo go to Super Bowl 48?');
  //answer//
  if(quizResponse1.toUpperCase() === 'Y'){
    alert('Correct! He was there to see the Seahawks win their first Super Bowl title ever!');
    //adds user right answer to variable
    rightAnswers++;
  }else {
    alert('Wrong, he actually did go. Please make a note of it.');
  }
}

function questionTwo(){
  var quizResponse2 = prompt('Is Carlo a former Olympic swimmer?');

  if(quizResponse2.toUpperCase() === 'Y'){
    alert('lol no, Carlo barely even knows how to swim');
  }else {
    alert('Correct! He once got 4th place in a 3 man race.');
    rightAnswers++;
  }
}

function questionThree(){
  var quizResponse3 = prompt('Did Carlo once drive from Seattle to New York?');

  if(quizResponse3.toUpperCase() === 'Y'){
    alert('Correct! Carlo drove from Seattle to Syracuse and got a speeding ticket in Illinois');
    rightAnswers++;
  }else{
    alert('Wrong! He drove all the way there and took showers at truck stop gas stations.');
  }
}

function questionFour(){
  var quizResponse4 = prompt('Is Carlo a sushi expert?');

  if(quizResponse4.toUpperCase() === 'Y'){
    alert('Correct! Carlo has worked for almost ten years with sushi restaurants. He better know his stuff.');
    rightAnswers++;
  }else{
    alert('Actually he is! better luck next time ' + userName + '.');
  }
}

function questionFive(){
  var quizResponse5 = prompt(userName + ', Is Carlo Filipino?');

  if(quizResponse5.toUpperCase === 'Y'){
    alert('Yes! Carlo even lived in the Philippines when he was a kid');
    rightAnswers++;
  }else{
    alert('Actually he is, but born and raised in America.');
  }
}

function questionSix(){
//Question 6 number guessing game
  for(var i = 0; i < 4; i++){
    console.log(i);
    var quizResponse6 = prompt(userName + ' can you guess how many chicken nuggets Carlo ate in one sitting?');
    var numberGuess = parseInt(quizResponse6);
    if(numberGuess < 50 && i < 3){
      alert('Your guess is too low.');
    }else if(numberGuess > 50 && i < 3){
      alert('Your guess is too high');
    }else if(numberGuess === 50 && i <= 3) {
      alert('You are right!');
      rightAnswers++;
      break;
    }else if(numberGuess !== 50 && i === 3){
      alert('Sorry you ran out of tries!');
    }
  }
}

function questionSeven(){
//Question 7 with array and for loops
  var statesLivedIn = ['california','virginia','new york', 'oregon','hawaii','montana'];
  for(var i = 0; i < 6; i++){
    var quizResponse7 = prompt('Can you guess any of the States I have been to? I will give you six guesses.').toLowerCase();
    for(var ii = 0; ii < statesLivedIn.length; ii++){
      if(quizResponse7 === statesLivedIn[ii]){
        alert('congratulations! ' + quizResponse7 + ' is a state I have been to.');
        i = 6;
        rightAnswers++;
        break;
      }
    }
    if(i === 5){
      alert('Sorry you ran out of guesses, the answers are ' + statesLivedIn);
    }
  }
}

//User right answers logged to console
console.log('This is how many answers you got right:' + rightAnswers);
alert('This is how many answers you got right:' + rightAnswers);
