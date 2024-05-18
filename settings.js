// JavaScript for Settings Page

// Function to save settings
function saveSettings() {
    // Get values of selected options
    var notifications = document.getElementById("notification-toggle").checked;
    var theme = document.getElementById("theme-select").value;
    var language = document.getElementById("language-select").value;
    var parkingLotSize = document.getElementById("parking-lot-size").value;
    var securityLevel = document.getElementById("security-level").value;
    var displayOptions = document.getElementById("display-options").checked;

    // Example: Save settings to local storage
    localStorage.setItem("notifications", notifications);
    localStorage.setItem("theme", theme);
    localStorage.setItem("language", language);
    localStorage.setItem("parkingLotSize", parkingLotSize);
    localStorage.setItem("securityLevel", securityLevel);
    localStorage.setItem("displayOptions", displayOptions);

    // Alert user that settings are saved
    alert("Settings saved successfully!");
}

// Function to load saved settings
function loadSettings() {
    // Example: Load settings from local storage
    var notifications = localStorage.getItem("notifications");
    var theme = localStorage.getItem("theme");
    var language = localStorage.getItem("language");
    var parkingLotSize = localStorage.getItem("parkingLotSize");
    var securityLevel = localStorage.getItem("securityLevel");
    var displayOptions = localStorage.getItem("displayOptions");

    // Update UI with loaded settings
    document.getElementById("notification-toggle").checked = notifications === "true";
    document.getElementById("theme-select").value = theme;
    document.getElementById("language-select").value = language;
    document.getElementById("parking-lot-size").value = parkingLotSize;
    document.getElementById("security-level").value = securityLevel;
    document.getElementById("display-options").checked = displayOptions === "true";
}

// Load saved settings when the page loads
window.onload = function() {
    loadSettings();
};
