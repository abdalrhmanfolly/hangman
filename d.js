const letters = "abcdefghijklmnopqrstuvwxyz";
// Get array
let lettersArray = Array.from(letters);

// Select letters container
let lettersContainer = document.querySelector(".letters");

// Generate letters
lettersArray.forEach(letter =>
{
    let span = document.createElement("span");
    let theLetter = document.createTextNode(letter);

    span.appendChild(theLetter);
    span.className = 'letter-box';

    lettersContainer.appendChild(span);
});

const words = {
    programminglanguage: ["javaScript", "Go", "java", "php", "Node", "Mysql", "python"],
    movies: ["fast x", "spider man", "avengers", "super man", "john wick", "mr X", "coco", "Home"],
    people: ["Albert", "Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Gandhi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

let allKeys = Object.keys(words);
let randomPropertyNumber = Math.floor(Math.random() * allKeys.length);
let randomPropertyName = allKeys[randomPropertyNumber];
let randomPropertyValue = words[randomPropertyName];
let randomPropertyValueNumber = Math.floor(Math.random() * randomPropertyValue.length);
let randomPropertyValueValue = randomPropertyValue[randomPropertyValueNumber];

document.querySelector(".game-info span").innerHTML = randomPropertyName + ' ';


let lettersGuessContainer = document.querySelector(".letters-guess");
let lettersAndSpace = Array.from(randomPropertyValueValue);


lettersAndSpace.forEach(letter =>
{
    let emptySpan = document.createElement("span");

    if (letter === ' ')
    {
        emptySpan.className = "space";
    }

    lettersGuessContainer.appendChild(emptySpan);
});

let guessSpan = document.querySelectorAll(".letters-guess span");

let wrongAttempts = 0;
let wrongDraw = document.querySelector(".hangman-draw");

document.addEventListener("click", (e) =>
{
    let isCorrect = false;
    if (e.target.className === 'letter-box')
    {
        e.target.classList.add("clicked");
        let clickedLetter = e.target.innerHTML.toLowerCase();
        let theChosenWord = Array.from(randomPropertyValueValue.toLowerCase());

        theChosenWord.forEach((wordLetter, wordIndex) =>
        {
            if (clickedLetter === wordLetter)
            {
                isCorrect = true;
                guessSpan.forEach((span, spanIndex) =>
                {
                    if (wordIndex === spanIndex)
                    {
                        span.innerHTML = wordLetter;
                    }
                });
            }
        });


        if (!isCorrect)
        {
            wrongAttempts++;
            wrongDraw.classList.add(`wrong-${wrongAttempts}`);

            if (wrongAttempts === 10)
            {
                endGame();

                lettersContainer.classList.add("finished");
            }

        }
    }
});

function endGame()
{
    let div = document.createElement("div");
    let divtext = document.createTextNode(`Game over the word is ${randomPropertyValueValue}`);
    div.appendChild(divtext);
    div.className = 'popup';
    document.body.appendChild(div);

}
