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