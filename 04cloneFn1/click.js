function toGoogle() {
    document.addEventListener('click', function(event) {
        if (event.clientX <= 0) {
            window.location.href = 'https://www.google.com';
        }
    });
}

