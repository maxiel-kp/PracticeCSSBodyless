// ตัวอย่างฟังก์ชันที่จะเพิ่ม
function dynamicFunction() {
  console.log("Dynamic function executed.");
}

function checkDynamicFunction() {
    if (window.dynamicFunction) {
        window.dynamicFunction();
    } else {
        console.log("Dynamic function is not available.");
    }
}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

window.dynamicFunction = dynamicFunction;
var newScript = document.createElement("script");
newScript.src = "main.js";
// document.head.appendChild(newScript);

var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'style.css';
    document.head.appendChild(link);

    link.rel = 'manifest';
    link.href = 'manifest.json';
    document.head.appendChild(link);

var scriptTag = document.querySelector('script[src="init.js"]');
if (scriptTag) {
  scriptTag.parentNode.removeChild(scriptTag);
  console.log("init.js removed from HTML.");
}

checkDynamicFunction()
