// Function to save text box inputs to an array
var textBoxInputs = [];
 
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

    }   else {
        alert("Seems like too much of a load for you today :(");
    }
    
}

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
    
    return textBoxInputs; // Return the array containing non-empty text box inputs
}

// Event listener for the "Done" button
document.getElementById('send-button').addEventListener('click', function() {
    var textBoxInputs = saveTextBoxInputs(); // Save text box inputs to an array
    console.log('Text box inputs:', textBoxInputs); // Output the array to the console
});

console.log(textBoxInputs);