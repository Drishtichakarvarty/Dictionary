
// Display the searched word in the search history
function showInHistory(word) {
const historyContainer = document.getElementById("historyContainer");

// Create a new history item and append it to the container
const historyItem = document.createElement("div");
historyItem.textContent = word;

historyContainer.appendChild(historyItem);
}

// Toggle the visibility of the search history container
function toggleHistory() {
const historyContainer = document.getElementById("historyContainer");
historyContainer.style.display = historyContainer.style.display === "block" ? "none" : "block";
}