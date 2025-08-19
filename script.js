// ==============================================
// Part 1: JavaScript Basics
// Variables, data types, operators, and conditionals
// ==============================================

// Age Checker Function
function checkAge() {
    // Get the age value from input
    let age = document.getElementById('ageInput').value;
    let output = "";
    
    // Check eligibility using conditional statements
    if (age >= 18) {
        output = "You are eligible to vote!";
    } else {
        output = "You are not eligible to vote yet.";
    }
    
    // Display the result
    document.getElementById('ageOutput').textContent = output;
}

// Number Comparison Function
function compareNumbers() {
    // Get values from inputs
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let output = "";
    
    // Compare numbers using conditionals
    if (isNaN(num1) || isNaN(num2)) {
        output = "Please enter valid numbers.";
    } else if (num1 > num2) {
        output = `${num1} is greater than ${num2}`;
    } else if (num1 < num2) {
        output = `${num1} is less than ${num2}`;
    } else {
        output = `${num1} is equal to ${num2}`;
    }
    
    // Display the result
    document.getElementById('comparisonOutput').textContent = output;
}

// ==============================================
// Part 2: JavaScript Functions
// Reusable blocks of logic for common tasks
// ==============================================

// Calculate Area Function
function calculateArea() {
    // Get input values
    let length = parseFloat(document.getElementById('lengthInput').value);
    let width = parseFloat(document.getElementById('widthInput').value);
    
    // Validate inputs
    if (isNaN(length) || isNaN(width)) {
        document.getElementById('areaOutput').textContent = "Please enter valid numbers.";
        return;
    }
    
    // Calculate area
    let area = length * width;
    
    // Display result
    document.getElementById('areaOutput').textContent = `Area: ${area}`;
}

// Temperature Conversion Function
function convertTemperature() {
    // Get input values
    let temp = parseFloat(document.getElementById('tempInput').value);
    let conversionType = document.getElementById('conversionType').value;
    
    // Validate input
    if (isNaN(temp)) {
        document.getElementById('tempOutput').textContent = "Please enter a valid temperature.";
        return;
    }
    
    let convertedTemp;
    
    // Perform conversion based on selection
    if (conversionType === "cToF") {
        convertedTemp = (temp * 9/5) + 32;
        document.getElementById('tempOutput').textContent = `${temp}°C = ${convertedTemp}°F`;
    } else {
        convertedTemp = (temp - 32) * 5/9;
        document.getElementById('tempOutput').textContent = `${temp}°F = ${convertedTemp.toFixed(2)}°C`;
    }
}

// ==============================================
// Part 3: JavaScript Loops
// Repetition and iteration for efficient coding
// ==============================================

// Multiplication Table Generator
function generateTable() {
    // Get input value
    let number = parseInt(document.getElementById('numberInput').value);
    
    // Validate input
    if (isNaN(number)) {
        document.getElementById('tableOutput').textContent = "Please enter a valid number.";
        return;
    }
    
    let output = "";
    
    // Use a for loop to generate the multiplication table
    for (let i = 1; i <= 10; i++) {
        output += `${number} × ${i} = ${number * i}<br>`;
    }
    
    // Display the table
    document.getElementById('tableOutput').innerHTML = output;
}

// Number Sequence Generator
function generateSequence() {
    // Get input value
    let count = parseInt(document.getElementById('sequenceCount').value);
    
    // Validate input
    if (isNaN(count) || count < 1) {
        document.getElementById('sequenceOutput').textContent = "Please enter a valid number greater than 0.";
        return;
    }
    
    let output = "";
    
    // Use a while loop to generate the sequence
    let i = 1;
    while (i <= count) {
        output += i + " ";
        i++;
    }
    
    // Display the sequence
    document.getElementById('sequenceOutput').textContent = output;
}

// ==============================================
// Part 4: DOM Manipulation
// Making web pages interactive with JavaScript
// ==============================================

// Add List Item Function
function addListItem() {
    // Get input value
    let input = document.getElementById('listItemInput');
    let list = document.getElementById('dynamicList');
    
    // Check if input is not empty
    if (input.value.trim() !== "") {
        // Create new list item
        let listItem = document.createElement('li');
        listItem.textContent = input.value;
        
        // Add item to the list
        list.appendChild(listItem);
        
        // Clear input field
        input.value = "";
    }
}

// Clear List Function
function clearList() {
    // Clear all items from the list
    document.getElementById('dynamicList').innerHTML = "";
}

// Theme Switching Functions
function switchToLightTheme() {
    document.body.className = "light-theme";
}

function switchToDarkTheme() {
    document.body.className = "dark-theme";
}

function switchToBlueTheme() {
    document.body.className = "blue-theme";
}

// Toggle Element Visibility
function toggleElement() {
    let message = document.getElementById('secretMessage');
    
    // Toggle visibility
    if (message.classList.contains('hidden')) {
        message.classList.remove('hidden');
    } else {
        message.classList.add('hidden');
    }
}

// ==============================================
// Event Listeners
// ==============================================

// Part 1 Event Listeners
document.getElementById('checkAgeBtn').addEventListener('click', checkAge);
document.getElementById('compareBtn').addEventListener('click', compareNumbers);

// Part 2 Event Listeners
document.getElementById('calculateAreaBtn').addEventListener('click', calculateArea);
document.getElementById('convertTempBtn').addEventListener('click', convertTemperature);

// Part 3 Event Listeners
document.getElementById('generateTableBtn').addEventListener('click', generateTable);
document.getElementById('generateSequenceBtn').addEventListener('click', generateSequence);

// Part 4 Event Listeners
document.getElementById('addItemBtn').addEventListener('click', addListItem);
document.getElementById('clearListBtn').addEventListener('click', clearList);
document.getElementById('lightThemeBtn').addEventListener('click', switchToLightTheme);
document.getElementById('darkThemeBtn').addEventListener('click', switchToDarkTheme);
document.getElementById('blueThemeBtn').addEventListener('click', switchToBlueTheme);
document.getElementById('toggleElementBtn').addEventListener('click', toggleElement);

// Initialize with some examples
window.onload = function() {
    generateTable();
    generateSequence();
};
