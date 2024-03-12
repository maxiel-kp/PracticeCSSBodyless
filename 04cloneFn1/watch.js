function toYouTube() {
    document.addEventListener('click', function(event) {
        if (event.clientX >= window.innerWidth) {
            window.location.href = 'https://www.youtube.com';
        }
    });
}