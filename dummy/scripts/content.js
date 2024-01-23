// Create a new HTML element
var el = document.createElement("div");
el.innerHTML = "hi.";

// Assign a class to the new element
el.classList.add("fabCta");

// Append the new element to the body of the page
document.body.appendChild(el);

function injectScript() {
  el.classList.add("expandedBox");
  // Create a script element
  var scriptElement = document.createElement("script");

  // Set the source of your script file
  scriptElement.src = chrome.runtime.getURL("scripts/injected-script.js");

  // Append the script element to the head of the page
  document.head.appendChild(scriptElement);
}

el.addEventListener("click", injectScript);
console.log("> ok");
