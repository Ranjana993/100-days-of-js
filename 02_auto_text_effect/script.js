const container = document.querySelector(".container")
const list = [" Ranjana Yadav", "fine ", "the best", "cool"];


let itemIndex = 0;
let charIndex = 0



updateText()


function updateText() {
  charIndex++;
  container.innerHTML = `<h1>
I am ${list[itemIndex].slice(0, charIndex)} </h1>
`;


  if (charIndex === list[itemIndex].length) {
    itemIndex++;
    charIndex = 0
  }
  
  if(itemIndex === list.length){
    itemIndex = 0
  }
  setTimeout(updateText, 100);
}

