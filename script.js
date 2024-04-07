// Function to save text box inputs to an array and local storage
function saveTextBoxInputs() {
    var textBoxInputs = []; // Array to store text box inputs
    
    // Select all text boxes with IDs starting with "user-input"
    var textBoxes = document.querySelectorAll('textarea[id^="user-input"]');
    
    // Loop through each text box
    textBoxes.forEach(function(textBox) {
        // Check if the current text box's value is not empty
        if (textBox.value.trim() !== '') {
            // If not empty, add the value of the text box to the array
            textBoxInputs.push(textBox.value);
        }
    });
    
    // Save the textBoxInputs array to local storage
    localStorage.setItem('textBoxInputs', JSON.stringify(textBoxInputs));
    
    // Return the textBoxInputs array
    return textBoxInputs;
}

// Function to load text box inputs from local storage
function loadTextBoxInputs() {
    var savedTextBoxInputs = localStorage.getItem('textBoxInputs');
    
    // Check if there are saved inputs in local storage
    if (savedTextBoxInputs !== null) {
        return JSON.parse(savedTextBoxInputs); // Parse the saved data from JSON format
    } else {
        return []; // If no saved data found, return an empty array
    }
}

// Event listener for the "Done" button
document.getElementById('send-button').addEventListener('click', function() {
    var textBoxInputs = saveTextBoxInputs(); // Save text box inputs to an array and local storage
    console.log('Text box inputs:', textBoxInputs); // Output the array to the console
});

// Load text box inputs from local storage when the page is refreshed
window.addEventListener('load', function() {
    var textBoxInputs = loadTextBoxInputs(); // Load saved text box inputs from local storage
    console.log('Loaded text box inputs:', textBoxInputs); // Output the loaded array to the console
});

// Rest of your code for adding text boxes and other functionalities
var textBoxCount = 3; // Initial count of text boxes

console.log("count equals:", textBoxCount);

function addTextBox() {
    if (textBoxCount < 10) {
        textBoxCount++; // Increment the count
        var textBoxContainer = document.getElementById('textBoxContainer');
    
        // Create a new text box
        var newTextBox = document.createElement('div');
        newTextBox.className = 'TaskInput';
        newTextBox.innerHTML = '<textarea id="user-input' + textBoxCount + '" placeholder=""></textarea>';

        var emptyLine = document.createElement('div');
        emptyLine.className = 'empty-line';
        textBoxContainer.appendChild(emptyLine);
        
        // Append the new text box to the container
        textBoxContainer.appendChild(newTextBox);

    } else {
        alert("Seems like too much of a load for you today :(");
    }
}

var redirectButton = document.getElementById('send-button');

        // Add click event listener to the button
        redirectButton.addEventListener('click', function() {
            // Redirect to another page
            window.location.href = 'tasktime.html';
        });