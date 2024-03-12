const scriptSources = ["click.js", "Trequartista.js", "Fantasisti.js"];
const scriptElements = [];

(async function () {
  for (const source of scriptSources) {
    const scriptElement = document.createElement("script");
    scriptElement.src = source;
    document.head.appendChild(scriptElement);
    scriptElements.push(scriptElement);

    await new Promise((resolve) => {
      scriptElement.onload = resolve;
    });
  }

  Object.values(window)
    .filter((value) =>
        typeof value === "function" &&
        !value.toString().includes("[native code]")
    ).forEach((func) => func());

  scriptElements.forEach((scriptElement) => scriptElement.remove());
})();
