// Excerpts
let excerpts = [
    "Be the change that you wish to see in the world",
    "A room without books is like a body without a soul",
    "If you tell the truth, you don't have to remember anything",
    "Without music, life would be a mistake",
    "Be yourself; everyone else is already taken",
    "So many books, so little time",
    "You have to be odd to be number one",
    "The most difficult thing is the decision to act, the rest is merely tenacity",
    "Everything you’ve ever wanted is on the other side of fear",
    "I can’t change the direction of the wind, but I can adjust my sails to always reach my destination",
    "Alone, we can do so little; together we can do so much",
    "The real opportunity for success lies within the person and not in the job",
    "Don’t judge each day by the harvest you reap but by the seeds that you plant",
    "The quickest way to double your money is to fold it over and put it back in your pocket",
    "Everything has beauty, but not everyone can see",
    "The only person you are destined to become is the person you decide to be",
    "What we achieve inwardly will change outer reality",
    "The way to get started is to quit talking and begin doing",
    "Whoever is happy will make others happy too",
    "The secret of success is to do the common thing uncommonly well",
];

// Element selection
const textarea = document.querySelector(".textarea");
const time = document.getElementById("time-left");
const btn = document.getElementById('StartGame')
const userReturn = document.getElementById("textarea");
const excerptsArea = document.getElementById("excerpt-area");
const wPM = document.getElementById('wordsPerMinute');
const accuracy = document.getElementById('accuracyDisplay')
btn.addEventListener("click", startGame);

// Variables
let timeLeft = 120;
let textCompare;
let wordsTyped;
let totalWords = 0;
let percentage = 00;

accuracy.innerHTML = percentage;
time.innerHTML = timeLeft;

// Start Game
function startGame() {
    reset();
    document.getElementById("textarea").focus();
    timer();
}

// Ends game
function endGame() {
    time.innerHTML = "Game Over";
    calculateWPM();
    calculateAccuracy();
    document.getElementById("textarea").disabled = true;
}

// Timer
function timer() {
    const countDown = setInterval(() => {
        timeLeft--;
        
        time.innerHTML = timeLeft;
        if (timeLeft <= 0) {
            endGame();
            clearInterval(countDown);
        }        
    }, 1000);
}



// Gets a random excerpt from the array
function getExcerpt() {
    return excerpts[Math.floor(Math.random() * excerpts.length)];
}

// Displays new excerpt
async function displayExcerpt() {
    const phrase = getExcerpt();
    excerptsArea.innerText = phrase;
    phraseCompare = phrase.split(" ");
}

displayExcerpt();

let text;
let totalErrors
function compare(){  
    console.log(textCompare);
    console.log(phraseCompare);
    let errors = 0;
         // comparing each element of the arrays 
        for(let i=0; i < phraseCompare.length; i++) {
            if(textCompare[i] != phraseCompare[i]) {
                errors++;
                
            }            
        }    
        console.log(errors); 
}

function calculateAccuracy(){

}

//     percentage = (accuracyCalc / phraseCompare.length) * 100;
//     percentage2DP = percentage.toFixed(0)
//     accuracy.innerHTML = percentage2DP + '%';
// }

// Calculates WPM
function calculateWPM() {
    wordsTyped = textCompare.length
    totalWords = (wordsTyped / 120) * 60;
    wPM.innerHTML = totalWords.toFixed(0);
}

// Reset values 
function reset() {
    document.getElementById("textarea").disabled = false;
    timeLeft = 120;
    accuracy.innerHTML = 0;
    wPM.innerHTML = 0;
}

// User Text
// https://stackoverflow.com/questions/16011312/execute-function-on-enter-key
userReturn.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        //checks whether the pressed key is "Enter"
        validate(e);
    }
});

// returns values on enter keypress
// https://stackoverflow.com/questions/16011312/execute-function-on-enter-key
function validate(e) {
    
   text = e.target.value;
    textCompare = text.split(" "); 
    compare();    
    getExcerpt();
    document.getElementById("textarea").value = "";
    displayExcerpt();
    // calculateAccuracy();
    calculateWPM(); 
      
}


