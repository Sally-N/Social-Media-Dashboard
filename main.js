'use strict';

const root = document.getElementById('root');
const slideHousing = document.getElementById('slideHousing');

const allCards = document.querySelectorAll('.card');

const slideButton = document.getElementById('slider');

const texts = document.querySelectorAll('.text');
console.log(texts);

const darkGreyTexts = document.querySelectorAll('.dark-grey');
console.log(darkGreyTexts);
let one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');



function themeToggle() {
    if (slideButton.classList.contains('slideBtnLight') == true) {
        darkGreyTexts.forEach(
            darkGreyText => darkGreyText.style.color = "var(--text-color-white)"
        );
        slideButton.classList.replace("slideBtnLight", "slideBtnDark")
        slideHousing.classList.replace("slider", "sliderDarkTheme");

        texts.forEach(text => text.style.color = "var(--text-color-white)");
        allCards.forEach(card => { card.style.backgroundColor = "var(--card-background)" });
        allCards.forEach(card => { card.style.borderColor = "var(--card-background)" });
        root.style.backgroundColor = "var(--very-dark-blue)";


        one.style.borderTopColor = "var(--facebook)";
        two.style.borderTopColor = "var(--twitter)";
        three.style.borderTopColor = "var(--instagram)";
        four.style.borderTopColor = "var(--youtube)";
    } else {

        slideButton.classList.replace("slideBtnDark", "slideBtnLight");
        slideHousing.classList.replace("sliderDarkTheme", "slider");

        one.style.borderTopColor = "hsl(208, 92%, 53%)"
 
        three.style.borderTopColor = "var(--instagram)";

        slideButton.style.backgroundColor = "var(--text-color-white)"
        // slideHousing.style.backgroundColor = "var(--light-theme-toggle)";
        darkGreyTexts.forEach(darkGreyText =>
            darkGreyText.style.color = "var(--text-color)"
        );
        texts.forEach(text => text.style.color = "var(--very-darkblue-text)");

        allCards.forEach(card => { card.style.backgroundColor = "var(--grayish-blue-card-background)" });
        allCards.forEach(card => { card.style.borderColor = "var(--grayish-blue-card-background)" });
        root.style.backgroundColor = "var(--text-color-white)";


    }


}

// slidebutton.addEventListener("mousemove", themeToggle);
slideButton.addEventListener("click", themeToggle);
// slideButton.addEventListener("drag", themeToggle);

