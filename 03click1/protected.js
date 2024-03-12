// const scriptSources = ["style.js", "click.js"];
const scriptSources = ["click.js"];

for (const source of scriptSources) {
  (async function () {
    // Load click.js
    const clickScript = document.createElement("script");
    clickScript.src = source;
    document.head.appendChild(clickScript);

    await new Promise((resolve) => {
      clickScript.onload = resolve;
    });

    // if(source=="click.js"){
      // await toGoogle();
    // }
    // else{
    //   await draw();
    // }

    // Copy functions from click.js to main.js
    const clickScriptFunctions = Object.keys(window)
      .filter((key) => typeof window[key] === "function")
      .filter((key) => !window[key].toString().includes("[native code]"));

    clickScriptFunctions.forEach((funcName) => {
      window[funcName] = window[funcName];
    });

    // Remove click.js script element from the header
    clickScript.remove();
  })();

  toGoogle();
  // await draw();
}
