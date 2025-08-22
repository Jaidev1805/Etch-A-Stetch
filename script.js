let GridSize = document.querySelector(".size");
let GridClear = document.querySelector(".clear");
let Container = document.querySelector(".container");

GridSize.addEventListener("click", () => {
    let answer = prompt("How many rows/columns do you want?");
    if (answer < 100){
        Container.replaceChildren();
        generateGrid(answer);
    }else{
        alert("Please enter a number less than 100!");
    }
});

GridClear.addEventListener("click", () => {
    const allDivs = document.querySelectorAll("div");
    allDivs.forEach(div => {
    div.style.backgroundColor = "white";
    })
});

function generateGrid(answer){
    const boxSize = 760/answer;
    for(let i = 0; i < (answer * answer); i++){
        const boxbox = document.createElement("div");
        boxbox.classList.add("div" + i);
        boxbox.style.width = boxSize + "px";
        boxbox.style.height = boxSize + "px";
        Container.appendChild(boxbox);

        boxbox.addEventListener("mouseover", () => {
            boxbox.style.backgroundColor = "rgb(255, 108, 235)";
        });
    }
}

generateGrid(16);