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

// Timer

const time = document.getElementById("time-left");
let timeLeft = 5;
time.innerHTML = timeLeft;

const countDown = setInterval(() => {
  timeLeft--;
  displayTime(timeLeft);
  time.innerHTML = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(countDown);
  }
}, 1000);

function displayTime(second) {}

// User Text

// https://stackoverflow.com/questions/16011312/execute-function-on-enter-key

var userReturn = document.getElementById("textarea");
userReturn.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    //checks whether the pressed key is "Enter"
    validate(e);
  }
});
// Displays new phrase

const excerptsArea = document.getElementById("excerpt-area");

function getExcerpt() {
  return excerpts[Math.floor(Math.random() * excerpts.length)];
}

async function displayExcerpt() {
  const phrase = getExcerpt();
  excerptsArea.innerText = phrase;
  phraseCompare = phrase.split(" ");
}

displayExcerpt();

const wPM = document.getElementById('wordsPerMinute')
var percentage = 00;
wPM.innerHTML = percentage;

function calculateAccuracy() {
  for (var i = 0; i < phraseCompare.length; i++) {
    for (var j = 0; j < textCompare.length; j++) {
      if (phraseCompare[i] == textCompare[j]) {
        accuracy++;
      } else {
      }
    }
  }
  percentage = (accuracy/phraseCompare.length)*100;
percentage2 = percentage.toFixed(0)

  wPM.innerHTML = percentage2 + '%';

}

// Compares Accuracy
var textCompare

function validate(e) {
  var text = e.target.value;
  //validation of the input...
  textCompare = text.split(" ");
  console.log(textCompare);
  getExcerpt();
  console.log(phraseCompare);
  accuracy = 0;
  calculateAccuracy();

  
  document.getElementById("textarea").value = "";
  displayExcerpt();
}
