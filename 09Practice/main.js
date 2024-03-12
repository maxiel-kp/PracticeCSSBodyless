//setsecurity
function main(initScript) {
  document.head.appendChild(
    Object.assign(document.createElement("script"), {
      src: initScript,
      onload: function () {
        this.remove();
      },
    })
  );
  document.currentScript.remove();
}

main("Enganche.js");

