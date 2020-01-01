//Global Variables//
//-----------------------------------------------------------------------------------------------------//

//All Arrays//
var answers = ["frank", "sweet dee", "golden god", "charlie", "toe knife", "kitten mittens"];
var images = ["../Word-Guess-Game/assets/images/Charlie_kelly.jpg", "../Word-Guess-Game/assets/images/frankReynolds.jpg", "../Word-Guess-Game/assets/images/goldenGod.jpg",
    "../Word-Guess-Game/assets/images/Kitten-mittons.jpg", "../Word-Guess-Game/assets/images/sweetDee.jpg", "../Word-Guess-Game/assets/images/toe-knife.jpg"
]
var selectedWord = [""];
var lettersinWord = [];
var blanks = 0;
var blanksandSucesses = [];
var wrongletters = [];

//Game counters//

var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 10;

//Funtions//
//-----------------------------------------------------------------------------------------------------//

function startGame (){

    selectedWord = answers[Math.floor(Math.random() * answers.length)];
    lettersinWord = selectedWord.split("");
    blanks = selectedWord.length;
    //reset game//
    guessesLeft = 10;
    wrongletters = [];
    blanksandSucesses = [];

    //populate right number of blanks//

    for (var i=0; i<blanks; i++){
        blanksandSucesses.push("_");
    }

    //Testing funtion//
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(blanks);
    console.log(blanksandSucesses);
}

//Main Process//

startGame ();
