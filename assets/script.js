const questionInput = document.getElementById('what-u-know');
const buttonA = document.getElementById('optionA');
const buttonB = document.getElementById('optionB');
const buttonC = document.getElementById('optionC');
const buttonD = document.getElementById('optionD');
const startNow = document.getElementById('start-button');
const nextQuest = document.getElementById('next-button');


// start quiz
startNow.addEventListener('click', startQuiz)
function startQuiz() {
    startNow.classList.add('hide');
    nextQuest.classList.remove('hide');
    if (Qarray.length === 0) {
        nextQuest.classList.add('hide'); 
        buttonA.classList.add('hide');
        buttonB.classList.add('hide');
        buttonC.classList.add('hide');
        buttonD.classList.add('hide');
    }
}
// clear question
function clearCard() {

}

// display question
nextQuest.addEventListener('click', pushQuestion);
function pushQuestion() {
    // I want to push question content to content-card, caused by button click

   
    

}

// answer question

// timer
/*startNow.addEventListener('click', timer)*/





// where I am drawing my question options from
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


// timer goes here
let interval = null;
let howLong = document.getElementById('time');
let [mill, sec, min] = [0, 0, 0];

startNow.addEventListener('click', timer)
function timer() {
    startNow.addEventListener('click', clearTime);

    function clearTime() {
        if(interval !== null) {
        clearInterval(interval)
        }
    };

    let interval = setInterval (stopwatch, 10);

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
        // displays the time
        let m = min < 10 ? "0" + min : min;
        let s = sec < 10 ? '0' + sec : sec;
        let mi = mill < 10 ? '00' + mill :  mill < 100 ? '0' + mill : mill; 

        document.querySelector('time').innerHTML = `${m}: ${s}: ${mi}`;
    };
    
};
// for testing
console.log(pushQuestion());
console.log(pushQuestion());
console.log(pushQuestion());
console.log(pushQuestion());
console.log(pushQuestion());

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
*/
