function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    light: document.querySelector("#light").checked
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#light").checked = result.light || false;
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get("light");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
