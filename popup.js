//jshint esversion: 6
let checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener('change', () => {
  if(this.checked){
    console.log("Checkbox is checked.");
    let params = {
      active: true,
      currentWindow: true
    };
    chrome.tabs.query(params, gotTabs);
      function gotTabs(tabs){
        let msg = {
          txt: "YAY"
        };
      chrome.tabs.sendMessage(tabs[0].id, msg);
    }

  }
  else{
    console.log("Checkbox is not checked.");
    let params = {
      active: true,
      currentWindow: true
    };
    chrome.tabs.query(params, gotTabs){
      function gotTabs(tabs){
        let msg = {
          txt: "NAY"
        };
      }
      chrome.tabs.sendMessage(tabs[0].id, msg);
    }
  }
});
