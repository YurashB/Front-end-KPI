const variant = 5;

let table = document.getElementById("table");
let pallet = document.getElementById("pallet");
let variantSquare = document.querySelector(`.square-${variant}`)

variantSquare.addEventListener('mouseover', e => {
    variantSquare.style.background = randomColor();
})

variantSquare.addEventListener('click', e => {
    variantSquare.style.background = pallet.value;
})

table.addEventListener('dblclick', e => {
    let squares = table.children;

    for (let square of squares) {
        if (square.className !== `square-${variant}`) {
            console.log(square.style.background = pallet.value)
        }
    }
})


function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
}