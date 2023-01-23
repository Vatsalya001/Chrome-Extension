//jshint esversion: 6
// var blockedSites = [];
const generateHTML = ()=>{
  return `<h1>Site is Blocked</h1>`;
};
// document.addEventListener(If button is toggled then push that url to blockedSites[])
chrome.runtime.onMessage.addListener(gotMessage);        //recieving msg from background.js
function gotMessage(request, sender, response){
 console.log(request);
 if(request.txt ==="YAY"){
   document.head.innerHTML = generateStyle();
   document.body.innerHTML = generateHTML();
   //get the url and push in array
 }
 else if(request.txt === "NAY"){
   //get the url and pop from array
 }
}




var curr_url = window.location.hostname;
const generateStyle = ()=>{
  return `<style>
  * {
    box-sizing: border-box;
    color: #fff;
    font-family: monospace;
    font-size: 5vw;
    font-weight: bold;
    text-align: center;
  }

  html {
    background: radial-gradient(68.34% 50% at 50% 50%, #2D9AFF 0%, #41DEE8 0%, #A22DFF 100%);
    height: 100vh;
    padding: 50px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  </style>`;
};
//for(int i=0; i<blockedSites.length; i++){
//  if(curr_url === blockedSites[i]){
//    document.head.innerHTML = generateStyle;
//    document.body.innerHTML = generateHTML;
// }
// }
if(curr_url === "www.youtube.com"){
  document.head.innerHTML = generateStyle();
  document.body.innerHTML = generateHTML();
}
