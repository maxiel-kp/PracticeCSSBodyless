// Create and append multiple scripts using a loop
const scriptSources = ["style.js", "click.js"];

for (const source of scriptSources) {
    const scriptElement = document.createElement("script");
    scriptElement.src = source;
    document.head.appendChild(scriptElement);
}


// Function to load a script securely
function loadScriptSecure(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// Load a script securely using the loadScript function
loadScriptSecure("protected-code.js")
  .then(() => {
    console.log("Protected code has been loaded.");
  })
  .catch((error) => {
    console.error("Error loading protected code:", error);
  });

// Define a function to remove the scripts after they've loaded
window.addEventListener("load", document.querySelectorAll("script").forEach((script) => script.remove()));
