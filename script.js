const animateButton = document.getElementById('animateButton');
const textContainer = document.getElementById('textContainer');
const hiddenText = document.getElementById('hiddenText');

const texts = [
    "Here is a poem",
    "for one so dear",
    "a mother",
    "mummy dearest",
    "maker of sandwiches",
    "advisor of when to fuck off",
    "poem is finished",
    "sod off",
    "press the button then..."
];

let index = 0;
let animating = false;
let completed = false;

function updateText() {
    if (index < texts.length) {
        textContainer.textContent = texts[index];
        index++;
        setTimeout(updateText, 476);
    } else {
        animating = false;
        completed = true;  // Mark animation as complete
    }
}

animateButton.addEventListener('mouseover', () => {
    if (!animating && !completed && textContainer.textContent !== "love u bye") {
        animating = true;
        index = 0;
        updateText();
    }
});

animateButton.addEventListener('click', () => {
    if (textContainer.textContent === "press the button then...") {
        revealParagraph();
        textContainer.textContent = "love u bye";
        completed = false;  // Allow reset only after displaying "ERROR....RE.SET"
    } else if (textContainer.textContent === "love u bye") {
        resetAnimation();
        textContainer.textContent = ' ... ';
    }
});

function revealParagraph() {
    hiddenText.style.display = 'block';
}

function resetAnimation() {
    textContainer.textContent = "";
    hiddenText.style.display = 'none';
    animating = false;
    completed = false;
    index = 0;
}

//https://github.com/simgrou/CyberPunkPortfolioSite

// Ensure the audio file path is correct
const soundEffect = new Audio('Assets/laserButton.mp3');

// Ensure the button exists
const myButton = document.getElementById('animateButton');

if (myButton) {
    // Attach an event listener to the button
    myButton.addEventListener('click', () => {
        // Check if the button's text content is "CLICK"
        if (myButton.textContent === "CLICK") {
            soundEffect.play(); // Play the sound effect
        }
    });
} else {
    console.error('Button with id "animateButton" not found.');
}