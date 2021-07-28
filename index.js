var readlineSync = require('readline-sync');
const chalk = require('chalk');


var score = 0;

var userName = readlineSync.question(chalk.green("Enter your name please:  "));

console.log(chalk.red("Hey " + userName + "! Let us see Are You a Guitarista or Not!") );
console.log("            ");



function guitarQuiz(question, answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer){
    console.log(chalk.yellow("Well Done! It's correct. One more step to Become Guitarista!"));
    score++;
     console.log("Current Score is: "+score);
     console.log("            ");
  }else {
    console.log(chalk.red("Oh! its wrong!"));
      console.log("Current Score is: "+score);
      console.log("            ");
  }
};



var questions = [{
  question: "How many strings are there in Guitar(five or six)? ",
  answer: "six"
},{
  question: "What is a Pick Called? ",
  answer: "plectrum"
},{
  question: "How many types of guitars are there? ",
  answer: "four"
},{
  question: "How many frets are there in Guitar? ",
  answer: "20"
},{
  question: "Is Guitar an Indian instrument? ",
  answer: "no"
},{
  question: "Which is the most used guitar type? ",
  answer: "acoustic"
},{
  question: "Which is the best company? ",
  answer: "yamaha"
},{
  question: "What is the Price of Cheapest Guitar? ",
  answer: "2000"
}];


for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  guitarQuiz(currentQuestion.question, currentQuestion.answer)
};

if(score>=6){
   console.log(chalk.green.bold("Wohoo! You are a Real Guitarista!! Your Score is: "+score)); 
}
else if(score>=4 && score<6){
  console.log(chalk.green.bold("You Just Missed it!! try again once. Your score is: "+score)); 
}
else if(score==3 ){
  console.log(chalk.green.bold("You need to read more about Guitar Bro! Your score is: "+score)); 
}
else{
  console.log(chalk.red.bold("You need to Start Learning Right now! "+score)); 

};