const styleScript = document.createElement('script');
styleScript.src = 'style.js';
document.head.appendChild(styleScript);

// Define a function to remove the scripts after they've loaded
function removeScripts() {
    // const scripts = document.querySelectorAll('script[data-remove-me]');
    const scripts = document.querySelectorAll('script');
    scripts.forEach(script => script.remove());
  }
  
  // Attach an event listener to execute the function when style.js is loaded
  styleScript.addEventListener('load', removeScripts);

// import styleElement from './style.js';
// document.body.appendChild(styleElement);


// const linkHeader = document.createElement('link');
// linkHeader.rel = 'stylesheet';
// linkHeader.href = 'style.css';
// document.head.appendChild(linkHeader);

// setTimeout(function() {
//     window.location.href = 'https://www.youtube.com/embed/kvqnbTeeF04?si=SqfULOnrQz7u-Ak7';
// }, 4000);


// const styleScript = document.createElement('script');
// styleScript.type = 'module';
// styleScript.src = 'style.js';
// document.head.appendChild(displayScript);
