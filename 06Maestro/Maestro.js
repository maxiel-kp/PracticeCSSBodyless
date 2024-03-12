// maestro.js
(async function Maestro() {
    const scriptSources = [
      { src: "click.js", functionName: "startClick" },
      { src: "watch.js", functionName: "startWatch" },
      { src: "Trequartista.js", functionName: "Display" }
    ];
  
    const scriptElements = loadScriptElements(scriptSources);
    await waitForScriptsToLoad(scriptElements);
    const functionNames = removeScriptElementsAndGetFunctionNames(scriptElements);
    executeFunctions(functionNames);
  })();
  
  function loadScriptElements(scriptSources) {
    const scriptElements = [];
    for (const { src, functionName } of scriptSources) {
      const scriptElement = document.createElement("script");
      scriptElement.src = src;
      scriptElement.setAttribute("data-function-name", functionName);
      document.head.appendChild(scriptElement);
      scriptElements.push(scriptElement);
    }
    return scriptElements;
  }
  
  async function waitForScriptsToLoad(scriptElements) {
    await Promise.all(scriptElements.map(scriptElement => new Promise((resolve) => {
      scriptElement.onload = resolve;
    })));
  }
  
  function removeScriptElementsAndGetFunctionNames(scriptElements) {
    const functionNames = scriptElements.map(scriptElement => {
      const functionName = scriptElement.getAttribute("data-function-name");
      scriptElement.remove();
      return functionName;
    });
    return functionNames;
  }
  
  function executeFunctions(functionNames) {
    functionNames.forEach(functionName => {
      const func = window[functionName];
      if (typeof func === "function") {
        func();
      } else {
        console.error(`Function ${functionName} not found or is not a function`);
      }
    });
  }
  