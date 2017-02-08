'use strict';

var response1 = confirm ('Hello, would you like to take a quiz?');

if(response1){
  console.log('Awesome! Let\'s get started!');
} else {
  console.log('Too Bad, starting anyway');
}

var quizResponse1 = prompt('Please Answer with Y or N. Does Adam have a dog?');

if(quizResponse1.toUpperCase() === Y){
  console.log('Awesome! you are correct!');
}
