const startNow = document.getElementById('start-button');
const nextQuest = document.getElementById('next-button');
const lastQuest = document.getElementById('last-quest');
const answers = document.getElementById('answers');

const Qarray = [
    {
    question: 'placeholder question 1',
    choices: [
        {text:'A. Test', correct:false},
        {text:'B. Correct', correct:true},
        {text:'C. Test', correct:false},
        {text:'D. Test', correct:false}
    ]
    },
    {   
    question: 'placeholder question 2',
    choices: [
        {text:'A. Correct', correct:true},
        {text:'B. Test', correct:false},
        {text:'C. Test', correct:false},
        {text:'D. Test', correct:false}
    ],
    },
    {    
    question: 'placeholder question 3',
    choices: [
        {text:'A. Test', correct:false},
        {text:'B. Test', correct:false},
        {text:'C. Test', correct:false},
        {text:'D. Correct', correct:true}
    ],
    },
    {
    question: 'placeholder question 4',
    choices: [
        {text:'A. Test', correct:false},
        {text:'B. Test', correct:false},
        {text:'C. Test', correct:false},
        {text:'D. Correct', correct:true}
    ],
    },
    {
    question: 'placeholder question true or false',
    choices: [
        {text:'True', correct:true},
        {text:'False', correct:false}
    ],
    }
]

function whichQuestion() {
    for (let i = 0; i < Qarray.length; i++)
    if (Qarray.length === 0) {
        document.getElementById('display-question').innerText = 'Quiz Complete!'
    }
    
    var currentQuestion = Qarray.splice(Math.floor(Math.random() * Qarray.length), 1);
    document.getElementById('display-question').innerHTML = (currentQuestion);
    
    return currentQuestion;
};

// timer goes here
// 
let [mill, sec, min] = [0, 0, 0];
let howLong = document.querySelector('.timer');
let interval = null;

startNow.addEventListener('click', timer)
function timer() {
    startNow.addEventListener('click', clearTime);
    interval = setInterval (stopwatch, 10);

    // actual timer part
    function stopwatch() {
        mill += 10;
        if (mill == 1000) {
            mill = 0;
            sec++;
            if (sec == 60) {
                sec = 0;
                min++;
                if (min == 60) {
                    min = 0;
                } 
            }
        }
    }
        // displays the time in html
        let m = min < 10 ? "0" + min : min;
        let s = sec < 10 ? '0' + sec : sec;
        let mi = mill < 10 ? '00' + mill :  mill < 100 ? '0' + mill : mill; 

        howLong.innerHTML = `  ${m}  :   ${s}  :   ${mi}`;
        function clearTime() {
            if(interval !== null) {
            clearInterval(interval);
            }
        };
};
// for testing
console.log(whichQuestion());
console.log(whichQuestion());
console.log(whichQuestion());
console.log(whichQuestion());
console.log(whichQuestion());

console.log(Qarray)
// OLD CODE CEMETERY
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
            document.getElementById("time").innerHTML = d.toLocaleTimeString();
        }
        document.getElementById("magic-button").addEventListener('click', clearInterval(whatTime))
    };
     console.log(timer())
    
    // starts the timer
    document.getElementById('magic-button').addEventListener('click', timer());
    */

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
// tried to go back to original timer and repurpose it, but it kept going into negative numbers
/* function timer() {
    
    const startTime = 1;
    let minToSec = startTime * 10;

    const countdownTimer = document.getElementById('timeytime');

    setInterval(timeLeft, 1000);
    var tickDown = setInterval(timeLeft, 1000);

    function stopTimer() {
        clearInterval(tickDown);
        }
    function timeLeft() {
        const min = Math.floor(minToSec / 60);
        let sec = minToSec % 60;

        sec = sec < 10 ? '0' + sec : sec;

        countdownTimer.innerHTML = `${min}: ${sec}`;
        minToSec--;
        if (minToSec === 0) {
            stopTimer();
        }
    }
}
// randomly chooses question and then removes it from the array
// this didn't work, it went through all the questions at once instead of one at a time
/*nextQuest.addEventListener('click', whichQuestion);
function whichQuestion() {
    
    if (Qarray.length === 0) {
        document.getElementById('display-question').innerText = 'Quiz Complete!'
    }
    
    var currentQuestion = Qarray.splice(Math.floor(Math.random() * Qarray.length), 1);
    document.getElementById('display-question').innerHTML = (currentQuestion);
    
};
// code reverse engineered from https://github.com/WebDevSimplified/JavaScript-Quiz-App
let mixItUp, QarrayIndex;
// start quiz
startNow.addEventListener('click', startQuiz);

function startQuiz() {
    startNow.classList.add('hide');
    nextQuest.classList.remove('hide');
    // randomize questions
    mixItUp = Qarray.sort(() => Math.random() - .5);
    QarrayIndex = 0;
}
// clear what is on the card
function clearCard() {

}
// choose next question
function readyQuest() {
    QarrayIndex++;
    pushQuestion(mixItUp[QarrayIndex]);
}
// display question

function pushQuestion(currentQuestion) {
    // I want to push question content to content-card, caused by button click
    currentQuestion = document.getElementById('display-question');

    currentQuestion.innerText = Qarray.question;

   Qarray.choices.forEach(choice => {
    const button = document.createElement('button')
    button.innerText = choice.text
    button.classList.add('buttons')
        if (choice.correct) {
            button.dataset.correct = choice.correct
        }
   })    
   const button = document.createElement('button');
   button.addEventListener('click', choiceAnswer);
   answers.appendChild(button)
}
    



// answers for question
function soManyChoices() {
    const button = document.createElement('button');
    button.innerText = choices.text;
    button.classList.add('buttons');
    if (choices.correct) {
        button.dataset.correct = choices.correct
    }
}
console.log(soManyChoices)
// user chooses answer
function choiceAnswer(e) {
    const thisButton = e.target;
    if (mixItUp.lenth > QarrayIndex + 1) {
        nextQuest.classList.remove('hide')
    } else {
        lastQuest.classList.remove('hide')
    }
}



*/
