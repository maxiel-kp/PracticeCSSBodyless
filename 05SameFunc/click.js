function startClick() {
    /*document.addEventListener('click', function(event) {
        if (event.clientX <= 0) {
            window.location.href = 'https://www.google.com';
        }
    });*/
    // 
    function goToYouTube() {
        window.location.href = 'https://www.youtube.com';
    }

    // Function to navigate to Google
    function goToGoogle() {
        window.location.href = 'https://www.google.com';
    }

    // Add a click event listener to the document
    document.addEventListener('click', function (event) {
        // Check if the click happened on the left half of the screen
        if (event.clientX < window.innerWidth / 2) {
            goToYouTube();
        } else {
            goToGoogle();
        }
    });
    console.log('you call click.js');
}


/*            // Left mouse button (button value 0) clicked
            window.location.href = "https://www.youtube.com";
        } else if (event.button === 2) {
            // Right mouse button (button value 2) clicked */