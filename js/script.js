
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

// Function to calculate the result of the expression on the display screen
function calculate() {
    // Check if the display is empty or undefined
    if (this.screen.value == undefined || this.screen.value == "") {
        this.screen.value = "0";
    }
    // If the display is not empty, evaluate the expression and update the display with the result
    else {
        this.screen.value = eval(this.screen.value);
    }
}

// Function to remember the current value on the display screen or recall a remembered value
function remember() {
    // Get the memory element
    memory = document.getElementById('memory');
	// If there is a value in memory, append it to the display screen
	if(memory.value)
	{
		toScreen(memory.value);
	}
    // If there is no value in memory and the display is not empty, store the current display value in memory and clear the display
	else if (screen.value != '')
	{
		memory.value = screen.value;
        screen.value = '';
	}
}

// Function to convert the current value on the display screen to a percentage
function toPercent() {
    if (screen.value ) {
        // Evaluate the current value on the display and divide it by 100 to convert it to a percentage
       screen.value = eval(screen.value) / 100;
    }
}


// Function to switch the sign of the current value on the display screen
function switchSigns()
{
    // Multiply the current value on the display by -1 to switch its sign
	screen.value = screen.value * -1;
}