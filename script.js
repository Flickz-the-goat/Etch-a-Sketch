const container = document.querySelector(".container");
const button = document.querySelector(".changeSize");  
const clear = document.querySelector(".clear")
//ask the user what dimension they want in the grid
function getSize(){
    let size; 
    size = prompt("What size do you want the grid to be(1-100)"); 
    return size; 
}
//create the grid
function createGrid(size){
    container.innerHTML = " "; 
    const squareSize = `calc(100% / ${size})`; 

    for(let i = 0; i < size*size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.flex = `1 0 ${squareSize}`;
        square.addEventListener("click", () => {
            square.style.backgroundColor = "yellow"; 
        })  
        container.appendChild(square); 
    }
}
let size = 16; 
button.addEventListener("click", () =>{
    size = getSize(); 
    createGrid(size); 
});
clear.addEventListener("click", () =>{
   createGrid(size); 
});
createGrid(size); 