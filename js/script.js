function toScreen(buttonValue) {
    // Get the display element
    //define the screen variable to hold the display element
    screen = document.getElementById("display");
    // Append the button value to the current value of the display
    screen.value = screen.value + buttonValue;
}