// Sample data for demonstration
const parkingData = {
    A1: 'yellow', // Reserved
    A2: 'red',    // Available
    A3: 'green'   // Booked
    // Add more spots as needed
};

// Function to update spot indicators based on parking data
function updateSpotIndicators() {
    Object.keys(parkingData).forEach(spot => {
        const indicator = document.getElementById('indicator' + spot.charAt(0));
        const spotElement = document.getElementById('spot' + spot);
        if (indicator && spotElement) {
            spotElement.style.backgroundColor = getColorCode(parkingData[spot]);
        }
    });
}

// Function to get color code based on parking status
function getColorCode(status) {
    switch (status) {
        case 'yellow':
            return '#ffff00'; // Yellow for reserved
        case 'red':
            return '#ff0000'; // Red for available
        case 'green':
            return '#008000'; // Green for booked
        default:
            return '#808080'; // Gray for unknown status
    }
}

// Function to handle back button click
function handleBackButtonClick() {
    // Implement back button functionality here
    console.log('Back button clicked');
}

// Function to initialize the page
function initializePage() {
    updateSpotIndicators();
    const backButton = document.querySelector('.back-arrow');
    if (backButton) {
        backButton.addEventListener('click', handleBackButtonClick);
    }
}

// Call the initializePage function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initializePage);
