var questionInput = document.querySelector('what-u-know');
var answerChoiceA = document.querySelector('optionA');
var answerChoiceB = document.querySelector('optionB');
var answerChoiceC = document.querySelector('optionC');
var answerChoiceD = document.querySelector('optionD');


// All 10 questions down below
var Q1 = {
    question: 'placeholder question 1',
    choices: ['A. Test', 'B. Correct', 'C. Test', 'D. Test'],
    answer: 'B',
};
var Q2 = {
    question: 'placeholder question 2',
    choices: ['A. Correct', 'B. Test', 'C. Test', 'D. Test'],
    answer: 'A',
};
var Q3 ={
    question: 'placeholder question 3',
    choices: ['A. Test', 'B. Test', 'C. Test', 'D. Correct'],
    answer: 'D',
};
var Q4 = {
    question: 'placeholder question 4',
    choices: ['A. Test', 'B. Test', 'C. Correct', 'D. Test'],
    answer: 'C',
};
var Q5 = {
    question: 'placeholder question 5',
    choices: ['A. Test', 'B. Test', 'C. Correct', 'D. Test'],
    answer: 'C',
};
var Q6 = {
    question: 'placeholder question 6',
    choices: ['A. Correct', 'B. Test', 'C. Test', 'D. Test'],
    answer: 'A',
};
var Q7 = {
    question: 'placeholder question 7',
    choices: ['A. Test', 'B. Correct', 'C. Test', 'D. Test'],
    answer: 'B',
};
var Q8 = {
    question: 'placeholder question 8',
    choices: ['A. Test', 'B. Test', 'C. Test', 'D. Correct'],
    answer: 'D',
};
var Q9 = {
    question: 'placeholder question 9',
    choices: ['A. Correct', 'B. Test', 'C. Test', 'D. Test'],
    answer: 'A',
};
var Q10 = {
    question: 'placeholder question 10',
    choices: ['A. Test', 'B. Test', 'C. Correct', 'D. Test'],
    answer: 'C',
};
// where I am drawing my question options from
const Qarray = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10];
// randomly chooses question and then removes it from the array
function whatQuestion() {
    
    for (let i = 0; i < Qarray.length; i++);
    if (Qarray.length === 0) {
        quizComplete = 'Quiz Complete!'
        return quizComplete
    }
    
    var currentQuestion = Qarray.splice(Math.floor(Math.random() * Qarray.length), 1);
    return currentQuestion;
};

function pushQuestion(event) {
    // I want to push question content to content-card, caused by button click
    document.getElementById('#what-u-know').innerHTML = currentquestion;
    

}


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
console.log(whatQuestion());
console.log(Qarray)

// timer goes here


/*function timer(event) {
    // trying to use local time and subtract starting time from finishing time
        setInterval(theTime, 1000);
    
        function theTime() {
            const d = new Date();
            document.getElementById("timeytime").innerHTML = d.toLocaleTimeString();
            if (Qarray == 0) {
    
            }
        }
    
        let whatTime = setInterval(theTime, 1000);
        function theTime() {
            const d = new Date();
            document.getElementById("timeytime").innerHTML = d.toLocaleTimeString();
        }
        document.getElementById("magic-button").addEventListener('click', clearInterval(whatTime))
    };
     console.log(timer())
    
    // starts the timer
    document.getElementById('magic-button').addEventListener('click', timer());
    */
// old code cemetary: safekeeping in case I can use it later
// I want to count up not down, easier to incorporate high scores that way
    // countdown was based on https://www.youtube.com/watch?v=x7WJEmxNlEs
    /*const startTime = 10;
    let minToSec = startTime * 60;

    const countdownTimer = document.getElementById('timeytime');

    setInterval(timeLeft, 1000);

    function timeLeft() {
        const min = Math.floor(minToSec / 60);
        let sec = minToSec % 60;

        countdownTimer.innerHTML = `${min}: ${sec}`;
        minToSec--;
    }*/
// failed stopwatch attempt, might try again later
/*let [min, sec, mill] = [0, 0, 0];

    const howLong = document.getElementById('timeytime');

    setInterval (stopwatch, 10);

    function stopwatch() {
        mill += 10;
        if (mill === 1000) {
            mill = 0;
            sec++;
            if (sec === 60) {
                sec = 0;
                min++
            }
        }

    };
    howLong.innerHTML = `${min}: ${sec}: ${mill}`;
    mill++;*/


/* first attempt at displaying what is deleted from array, 
technically works but I wanted it to be more random
I don't want people to memorize where the answer is for speedrunning, ya dig?
function whatQuestion() {
    for (let i = 0; i < Qarray.length; i++);
    currentQuestion = Qarray.pop();
    return currentQuestion;
};*/