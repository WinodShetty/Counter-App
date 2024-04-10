document.addEventListener("DOMContentLoaded", function() {
    // Get the + and - buttons
    const addButton = document.querySelector("button:nth-of-type(1)");
    const subtractButton = document.querySelector("button:nth-of-type(2)");

    // Get the counter display
    const counterDisplay = document.querySelector("h1");

    // Initial counter value
    let counter = 0;

    // Function to update counter display
    function updateCounterDisplay() {
        counterDisplay.textContent = counter;
    }

    // Event listener for the + button
    addButton.addEventListener("click", function() {
        counter++;
        updateCounterDisplay();
    });

    // Event listener for the - button
    subtractButton.addEventListener("click", function() {
        counter--;
        updateCounterDisplay();
    });

    // Update counter display initially
    updateCounterDisplay();
});
