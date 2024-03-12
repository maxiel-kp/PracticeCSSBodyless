(async function () {
  const scriptSources = ["click.js", "watch.js", "style.js"];
  const scriptElements = [];

  for (const source of scriptSources) {
    const scriptElement = document.createElement("script");
    scriptElement.src = source;
    document.head.appendChild(scriptElement);
    scriptElements.push(scriptElement);
  }

  await Promise.all(scriptElements.map(scriptElement => new Promise((resolve) => {
    scriptElement.onload = resolve;
  })));
  scriptElements.forEach(scriptElement => scriptElement.remove());

  startClick();
  startWatch();
  startStyle();
})();
