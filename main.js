 'use strict';

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
    if (slideButton.classList.contains('slideBtn') ==true) {
        console.log("light theme on") 
        console.log(slideButton.classList.contains('slideBtn'))
        console.log(`checking float ${slideButton.style.float}`) 
        slideButton.classList.remove("slideBtn") 
        slideButton.classList.add("slideBtnToLeft")
        slideHousing.classList.add("sliderDarkTheme")
        slideHousing.classList.remove("slider");


        // allCards.style.backgroundColor = "var( --card-background)"
        texts.forEach(text => text.style.color = "var(--text-color-white)");
        allCards.forEach(card => { card.style.backgroundColor = "var(--card-background)" });
        allCards.forEach(card => { card.style.borderColor = "var(--card-background)" });
        root.style.backgroundColor = "var(--very-dark-blue)";

        // slideButton.style.float = "left";
        // slideButton.style.backgroundColor = "var(--very-dark-blue)";
        // slideHousing.style.backgroundImage = "var(--dark-theme-toggle)";
        // darkGreyTexts.forEach(darkGreyText => {
        //     darkGreyText.style.color = "var(--text-color)"

        // });
        one.style.borderTopColor = "var(--facebook)";
        two.style.borderTopColor = "var(--twitter)";
        three.style.borderTopColor = "var(--instagram)";
        four.style.borderTopColor = "var(--youtube)";
    } else if (slideButton.classList.contains('slideBtn') == false)  {
        console.log("sally")
        
        console.log(slideButton.classList.contains('slideBtn'))
        // slideButton.classList.add("slideBtn") 
        slideButton.classList.add("slideBtn") 
        slideButton.classList.remove("slideBtnToLeft") 
        slideHousing.classList.remove("sliderDarkTheme")
        slideHousing.classList.add("slider");
        

        // slideButton.className = "slideBtn"
        // slideButton.style.float = "right";
        one.style.borderTopColor = "var(--facebook)";
        two.style.borderTopColor = "var(--twitter)";
        three.style.borderTopColor = "var(--instagram)";
        four.style.borderTopColor = "var(--youtube)";
       
        slideButton.style.backgroundColor = "var(--text-color-white)"
        // slideHousing.style.backgroundColor = "var(--light-theme-toggle)";
        darkGreyTexts.forEach(darkGreyText => {
            darkGreyText.style.color = "black"
        }); 
            texts.forEach(text => text.style.color = "var(--very-darkblue-text)");
       
            allCards.forEach(card => { card.style.backgroundColor = "var(--grayish-blue-card-background)" });
        allCards.forEach(card => { card.style.borderColor = "var(--grayish-blue-card-background)" });
        root.style.backgroundColor = "var(--text-color-white)";

        
    }


}

// slidebutton.addEventListener("mousemove", themeToggle);
slideButton.addEventListener("click", themeToggle);
// slideButton.addEventListener("drag", themeToggle);

