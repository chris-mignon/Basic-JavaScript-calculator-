
// Function to append the button value to the display screen
function toScreen(buttonValue) {
    // Get the display element
    //define the screen variable to hold the display element
    screen = document.getElementById("display");
    // Append the button value to the current value of the display
    screen.value = screen.value + buttonValue;
}


// Function to clear the display screen
function clearScreen() {
    //set the value of the display to an empty string
    screen.value = "";
}