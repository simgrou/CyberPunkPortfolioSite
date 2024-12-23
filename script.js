const animateButton = document.getElementById('animateButton');
const textContainer = document.getElementById('textContainer');
const hiddenText = document.getElementById('hiddenText');

const texts = [
    "welfhem--ck---se--7",
    "welc£m--ck-Cask--6",
    "welco£e--b-ck-Cask--5",
    "Welcom&-Back-Cask--4",
    "Welcom£-back-Case--3..",
    "Welcome back Case",
    "Welcome b0ck Case",
    "Welcome back.....",
    "Welco.e bac.....",
    "Welc..e b........",
    "We....e...c....",
    "We........c......",
    ".......ac......",
    ".....",
    "CLICK"
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
    if (!animating && !completed && textContainer.textContent !== "ERROR....RE.SET") {
        animating = true;
        index = 0;
        updateText();
    }
});

animateButton.addEventListener('click', () => {
    if (textContainer.textContent === "CLICK") {
        revealParagraph();
        textContainer.textContent = "ERROR....RE.SET";
        completed = false;  // Allow reset only after displaying "ERROR....RE.SET"
    } else if (textContainer.textContent === "ERROR....RE.SET") {
        resetAnimation();
        textContainer.textContent = 'Q3lfhem--ck-8%-se--7';
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