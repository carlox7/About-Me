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

//Quiz Questions
var quizQuOne = 'Please Answer with Y or N. Did Carlo go to Super Bowl 48?';
var quizQuTwo = 'Is Carlo a former Olympic swimmer?';
var quizQuThree = 'Did Carlo once drive from Seattle to New York?';
var quizQuFour = 'Is Carlo a sushi expert?';
var quizQuFive = userName + ', Is Carlo Filipino?';

//Quiz answers
var answerOne = 'Correct! He was there to see the Seahawks win their first Super Bowl title ever!';
var answerTwo = 'Correct! He once got 4th place in a 3 man race.';
var answerThree = 'Correct! Carlo drove from Seattle to Syracuse and got a speeding ticket in Illinois';
var answerFour = 'Correct! Carlo has worked for almost ten years with sushi restaurants. He better know his stuff.';
var answerFive = 'Yes! Carlo even lived in the Philippines when he was a kid';

//Wrong quiz answer
var wrongAnOne = 'Wrong, he actually did go. Please make a note of it.';
var wrongAnTwo = 'lol no, Carlo barely even knows how to swim';
var wrongAnThree = 'Wrong! He drove all the way there and took showers at truck stop gas stations.';
var wrongAnFour = 'Actually he is! better luck next time ' + userName + '.';
var wrongAnFive = 'Actually he is, but born and raised in America.';
//arrays for questions and answers
var quizQ = [quizQuOne,quizQuTwo,quizQuThree,quizQuFour,quizQuFive];
var quizA = [answerOne,answerTwo,answerThree,answerFour,answerFive];
var quizWrong = [wrongAnOne,wrongAnTwo,wrongAnThree,wrongAnFour,wrongAnFive];

function questionOne(){
  //yes or no question one
  var quizResponse1 = prompt(quizQ[0]);
  //answer
  if(quizResponse1.toUpperCase() === 'Y'){
    alert(quizA[0]);
    //adds user right answer to variable
    rightAnswers++;
  }else {
    alert(quizWrong[0]);
  }
}
//yes or no question two //
function questionTwo(){
  var quizResponse2 = prompt(quizQ[1]);

  if(quizResponse2.toUpperCase() === 'Y'){
    alert(quizWrong[1]);
  }else {
    alert(quizA[1]);
    rightAnswers++;
  }
}
//yes or no question three //
function questionThree(){
  var quizResponse3 = prompt(quizQ[2]);

  if(quizResponse3.toUpperCase() === 'Y'){
    alert(quizA[2]);
    rightAnswers++;
  }else{
    alert(quizWrong[2]);
  }
}
//yes or no question four//
function questionFour(){
  var quizResponse4 = prompt(quizQ[3]);

  if(quizResponse4.toUpperCase() === 'Y'){
    alert(quizA[3]);
    rightAnswers++;
  }else{
    alert(quizWrong[3]);
  }
}
//yes or no answer five//
function questionFive(){
  var quizResponse5 = prompt(quizQ[4]);

  if(quizResponse5.toUpperCase === 'Y'){
    alert(quizA[4]);
    rightAnswers++;
  }else{
    alert(quizWrong[4]);
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
        //breaks first for loop after correct answer
        i = 6;
        rightAnswers++;
        //breaks nested for loop
        break;
      }
    }
    if(i === 5){
      alert('Sorry you ran out of guesses, the answers are ' + statesLivedIn);
    }
  }
}
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();

//User right answers logged to console
console.log('This is how many answers you got right:' + rightAnswers);
alert('This is how many answers you got right:' + rightAnswers);
