const cssCode = `html {
    display: flex;
    height:100vh;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    background: #222;
  }
  
  body::before, body::after {
    font-weight: bold;
    font-family: 'SF Mono', 'Courier New', Courier, monospace;
    font-size: 42px;
    color: #ff4473;
  }
  
  head { 
    display: block;
    background-image: url('https://www.tutorialexample.com/wp-content/uploads/2020/09/gif-test-2.webp');
    height:20rem;
    width:20rem;
    background-repeat: no-repeat;
    background-size: cover;
    border: 5px solid #fff;
    border-radius: 10px;
    border-style: dashed;
  }
  
  body::before {
    display: inline-block;
    padding-top: 3rem;
    content: "Never gonna give you up...";
  }
  
  body::after {
    margin-left: 16px;
    display: inline;
    content: "i";
    background: #ff4473;
    animation: blink 1s infinite;
  }
  
  @keyframes blink {
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
    }
  }
`;

// Encode the CSS code into a data URI
const dataUri = `data:text/css;base64,${btoa(cssCode)}`;

// Create a <link> element and set its attributes
const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = dataUri;

// Append the <link> element to the document
document.head.appendChild(linkElement);
// document.currentScript.setAttribute('data-remove-me', true);




// const styleElement = document.createElement('style');
// styleElement.textContent = cssCode;
// document.head.appendChild(styleElement);

// const styleElement = document.createElement('style');
// styleElement.textContent = cssCode;
// document.head.appendChild(styleElement);
// export default styleElement;