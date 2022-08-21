





// All 10 questions down below
var Q1 = {
    question: 'placeholder question 1',
    choices: ['A', 'B', 'C', 'D'],
    answer: '1',
};
var Q2 = {
    question: 'placeholder question 2',
    choices: ['A', 'B', 'C', 'D'],
    answer: '2',
};
var Q3 ={
    question: 'placeholder question 3',
    choices: ['A', 'B', 'C', 'D'],
    answer: '3',
};
var Q4 = {
    question: 'placeholder question 4',
    choices: ['A', 'B', 'C', 'D'],
    answer: '4',
};
var Q5 = {
    question: 'placeholder question 5',
    choices: ['A', 'B', 'C', 'D'],
    answer: '5',
};
var Q6 = {
    question: 'placeholder question 6',
    choices: ['A', 'B', 'C', 'D'],
    answer: '6',
};
var Q7 = {
    question: 'placeholder question 7',
    choices: ['A', 'B', 'C', 'D'],
    answer: '7',
};
var Q8 = {
    question: 'placeholder question 8',
    choices: ['A', 'B', 'C', 'D'],
    answer: '8',
};
var Q9 = {
    question: 'placeholder question 9',
    choices: ['A', 'B', 'C', 'D'],
    answer: '9',
};
var Q10 = {
    question: 'placeholder question 10',
    choices: ['A', 'B', 'C', 'D'],
    answer: '10',
};
// where I am drawing my question options from
const Qarray = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10];
// randomly chooses question and then removes it from the array
function whatQuestion() {
    for (let i = 0; i < Qarray.length; i++);
    var currentQuestion = Qarray.splice(Math.floor(Math.random() * Qarray.length), 1); 
    return currentQuestion;
};


/* first attempt, technically works but I wanted it to be more random
I don't want people to memorize where the answer is for speedrunning
function whatQuestion() {
    for (let i = 0; i < Qarray.length; i++);
    currentQuestion = Qarray.pop();
    return currentQuestion;
};*/
// for testing
console.log(whatQuestion());
console.log(whatQuestion());
console.log(whatQuestion());
console.log(whatQuestion());
console.log(whatQuestion());
console.log(whatQuestion());
console.log(whatQuestion());
console.log(whatQuestion());
console.log(whatQuestion());
console.log(whatQuestion());
console.log(Qarray)