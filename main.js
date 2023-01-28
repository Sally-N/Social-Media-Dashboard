// function SlideLeft() {
//     // const texts = document.querySelectorAll('.texts');


//     // Checks to see if the slider is to the left of the div
//     if (document.getElementById("slider").style.float !== "left") {
//         // If it is we will float the sliderBtn to the left and change the background of the housing to green
//         document.getElementById("slider").style.float = "left";
//         document.getElementById("slideHousing").style.backgroundColor = "var(--lime-green)";

//         // Toggle dark mode on
//         document.body.style.backgroundColor = "var(--very-dark-blue)";
//         document.getElementsByClassName("texts").style.color = "blue"

//     } else {
//         // If clicked again the btn will move back to the right side and change the color back to original
//         document.getElementById("slider").style.float = "right";
//         document.getElementById("slideHousing").style.backgroundColor = "#e6e6e6";

//         // Toggle dark mode off
//         document.body.style.backgroundColor = "white";
//         document.getElementById("header").style.color = "#000";
//         document.getElementById("press").style.color = "#000";
//     }
// }
const root = document.getElementById('root');
const slideHousing = document.getElementById('slideHousing');
console.log(slideHousing);

const allCards = document.querySelectorAll('.card');
console.log(allCards)

const slideButton = document.getElementById('slider');
console.log(slideButton);

const texts = document.querySelectorAll('.text');
console.log(texts);

const darkGreyTexts = document.querySelectorAll('.dark-grey');
console.log(darkGreyTexts);
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');



function themeToggle() {
    if (slideButton.style.position = "right") {
        console.log("light theme on")

        // allCards.style.backgroundColor = "var( --card-background)"
        texts.forEach(text => text.style.color = "var(--text-color-white)");
        allCards.forEach(card => { card.style.backgroundColor = "var(--card-background)" });
        allCards.forEach(card => { card.style.borderColor = "var(--card-background)" });
        root.style.backgroundColor = "var(--very-dark-blue)";

        slideButton.style.float = "left";
        slideButton.style.backgroundColor = "var(--very-dark-blue)"
        slideHousing.style.backgroundColor = "var(--lime-green";
        darkGreyTexts.forEach(darkGreyText => {
            darkGreyText.style.color = "var(--text-color)"

        });
        one.style.borderTopColor = "var(--facebook)";
        two.style.borderTopColor = "var(--twitter)";
        three.style.borderTopColor = "var(--instagram)";
        four.style.borderTopColor = "var(--youtube)";
    } else {

    }

}

slideHousing.addEventListener("mousemove", themeToggle)

themeToggle()