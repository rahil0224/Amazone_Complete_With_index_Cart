console.log("Its a Clone of Amazon using JavaScript with Rahil");

document.addEventListener('DOMContentLoaded', function () {
    const popupOverlay = document.getElementById('popupOverlay');
    const closePopupButton = document.getElementById('closePopup');
  
    // Show the popup when the page loads
    popupOverlay.style.display = 'block';
  
    // Close the popup when the close button is clicked
    closePopupButton.addEventListener('click', function () {
      popupOverlay.style.display = 'none';
    });

    // Set a timeout to close the popup after a certain amount of time (e.g., 3 seconds)
    setTimeout(function() {
        popupOverlay.style.display = 'none';
    }, 3000); // 3000 milliseconds = 5 seconds
});
