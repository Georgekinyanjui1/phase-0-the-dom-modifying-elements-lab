// // Write your code here!
// const main = document.querySelector("main");
// main.remove();
// const newHeader = document.createElement('h1')
// newHeader.id = "victory"; //or the code below
// //newHeader.setAttribute("id", "victory");
// newHeader.innerHTML = "George Mwicigi is the champion";main.remove();

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = "victory";
newHeader.innerHTML = "George Mwicigi is the champion";
main.remove()